db.createUser({
  user: "leser",
  pwd: "Leser.1234",
  roles: [{ role: "read", db: "grujic" }]
})

db.createUser({
  user: "schreiber",
  pwd: "Schreiber.1234",
  roles: [{ role: "readWrite", db: "grujic" }]
})