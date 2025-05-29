import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
await db.query('DELETE FROM files');
await db.query('DELETE FROM folders');
  
  const folders = [
    {name: 'Cindi'},
    {name: 'Danny'},
    {name: 'Danielle'},
    {name: 'Claudia'},
    {name: 'Richard'},
  ];

  const files = [
    {name: 'Cindi', size: 200, folder_id: 100},
    {name: 'Danny', size: 300, folder_id: 105},
    {name: 'Danielle', size: 250, folder_id: 201},
    {name: 'Claudia', size: 100, folder_id: 110},
    {name: 'Richard', size: 150, folder_id: 190}
  ]

}

