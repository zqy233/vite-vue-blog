function emptyDir(path) {
  const files = fs.readdirSync(path)
  files.forEach(file => {
    const filePath = `${path}/${file}`
    const stats = fs.statSync(filePath)
    stats.isDirectory() ? emptyDir(filePath) : fs.unlinkSync(filePath)
  })
}

function rmEmptyDir(path) {
  const files = fs.readdirSync(path)
  if (files.length > 0) {
    let tempFile = 0
    files.forEach(file => {
      tempFile++
      rmEmptyDir(`${path}/${file}`, 1)
    })
    if (tempFile === files.length) {
      fs.rmdirSync(path)
    }
  } else {
    fs.rmdirSync(path)
  }
}

module.exports = function clearDir(path) {
  emptyDir(path)
  rmEmptyDir(path)
}
