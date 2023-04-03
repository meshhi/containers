class Team {
  constructor() {
      this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  info() {
    console.log(this.members);
  }
}

export default Team;