const choices = [
  {
    emoji: ":tada:",
    commit: "first commit "
  },
  {
    emoji: ":sparkles:",
    commit: "new feature "
  },
  {
    emoji: ":bug:",
    commit: "fix bug "
  },
  {
    emoji: ":lipstick:",
    commit: "update ui and style files "
  },
  {
    emoji: ":fire:",
    commit: "remove code or file "
  },
  {
    emoji: ":art:",
    commit: "improve code structure or code format "
  },
  {
    emoji: ":zap:",
    commit: "improve performance "
  },
  {
    emoji: ":memo:",
    commit: "document writing "
  }
]
const emojiArr = choices.map(item => item.emoji)
const commitArr = choices.map(item => item.commit)
module.exports = { emojiArr, commitArr }
