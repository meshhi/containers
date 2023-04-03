class Team {
  constructor() {
      this.members = new Set();
  }

  add(member) {
    const serializedMember = JSON.stringify(member);
    
    this.members.forEach(member => {
      if (JSON.stringify(member) === serializedMember) {
        throw new Error('member already exists!');
      }
    });

    this.members.add(member);
  }

  info() {
    console.log(this.members);
  }
}

export default Team;