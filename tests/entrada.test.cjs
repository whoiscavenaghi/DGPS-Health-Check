const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const ctx=vm.createContext({});
vm.runInContext(html.slice(html.indexOf('function parseText('),html.indexOf('function timeOfToken(')),ctx);
for(const sep of [';', '\t', ','])test('preserva coluna vazia com delimitador '+JSON.stringify(sep),()=>{
 const data=ctx.parseText([['E','N','h','hora'],['100','200','','12:00:00'],['101','201','3','12:00:01']].map(r=>r.join(sep)).join('\n'),false);
 assert.equal(data.rows[0].length,4);assert.ok(Number.isNaN(data.rows[0][2]));assert.equal(data.raw[0][3],'12:00:00');assert.equal(data.rows[1][2],3);
});
test('espaços múltiplos e vírgula decimal continuam aceitos',()=>{
 const a=ctx.parseText('E N h\n100  200  3\n101   201   4',false);assert.equal(a.rows[0].length,3);
 const b=ctx.parseText('E;N;h\n100,5;200,5;3,5\n101,5;201,5;4,5',false);assert.equal(b.rows[0][0],100.5);
});

for(const sep of [';', '\t', ','])test('preserva campos vazios nas bordas '+JSON.stringify(sep),()=>{
 const data=ctx.parseText([['id','E','N','h'],['','100','200',''],['','101','201','']].map(r=>r.join(sep)).join('\n'),false);
 assert.equal(data.rows[0].length,4);assert.ok(Number.isNaN(data.rows[0][0]));assert.ok(Number.isNaN(data.rows[0][3]));assert.equal(data.rows[0][1],100);
});

test('ignora comentários e preserva leitura por espaços e GMS',()=>{
 const a=ctx.parseText('# comentário\n  E N h  \n  100 200 3  \n  101 201 4  ',false);assert.equal(a.rows[0].length,3);assert.equal(a.rows[0][0],100);
 const b=ctx.parseText('22° 30\' 10" 43° 20\' 5"\n22° 30\' 11" 43° 20\' 6"',true);assert.equal(b.rows[0].length,6);assert.equal(b.rows[1][2],11);
});
