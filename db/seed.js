import db from "#db/client";


await db.connect();


async function seed() {
  // TODO
// await db.query('DELETE FROM files');
// await db.query('DELETE FROM folders');
// await db.query('INSERT INTO files');
for(let i=1; i <= 3; i++){
  const folders = await createFolder( 'Folder ' + i )
  for (let j=1; j <= 5; j++){
    const files = await createFiles( 'File ' + j, 17 * j, folders.id )
  }
}
  const folders = [
    {name: 'Colombia'},
    {name: 'Peru'},
    {name: 'Paraguay'},
  ];

// for (const folder of folders) {
//   console.log(folder)
//   await db.query('INSERT INTO folders (name) VALUES ($1) RETURNING *', [folder.name]);
// }

  const files = [
    {name: 'Cindi', size: 200, folder_id: 1},
    {name: 'Danny', size: 300, folder_id: 1},
    {name: 'Danielle', size: 250, folder_id: 1},
    {name: 'Claudia', size: 100, folder_id: 1},
    {name: 'Richard', size: 150, folder_id: 1},
    {name: 'Daniel', size: 200, folder_id: 2},
    {name: 'Shinji', size: 340, folder_id: 2},
    {name: 'Ben', size: 580, folder_id: 2},
    {name: 'Lyla', size: 790, folder_id: 2},
    {name: 'Claudia', size: 670, folder_id: 2},
    {name: 'Oscar', size: 420, folder_id: 3},
    {name: 'Noah', size: 410, folder_id: 3},
    {name: 'Ken', size: 400, folder_id: 3},
    {name: 'Barbie', size: 290, folder_id: 3},
    {name: 'Javier', size: 830, folder_id: 3},
    {name: 'Jackson', size: 940, folder_id: 4},
    {name: 'Ricardo', size: 390, folder_id: 4},
    {name: 'David', size: 300, folder_id: 4},
    {name: 'Kevin', size: 510, folder_id: 4},
    {name: 'Rachel', size: 620, folder_id: 4},
    {name: 'Allison', size: 600, folder_id: 5},
    {name: 'Poppy', size: 440, folder_id: 5},
    {name: 'Rose', size: 220, folder_id: 5},
    {name: 'Aliya', size: 210, folder_id: 5},
    {name: 'Mike', size: 200, folder_id: 5},
  ];

  // for (const file of files) {
  //   console.log(file)
  //   await db.query('INSERT INTO files (name, size, folder_id) VALUES ($1, $2, $3) RETURNING *', [file.name, file.size, file.folder_id]);
  // }
  
}
await seed();
await db.end();
console.log("🌱 Database seeded.");