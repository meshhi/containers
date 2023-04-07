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

  addAll(...members) {
    try {
      for (let i = 0; i < members.length; i++) {
        this.add(members[i]);
      }
    } catch(e) {
      console.log('error addall logged')
    }
  }

  toArray() {
    return Array.from(this.members);
  }

  info() {
    console.log(this.members);
  }
}

export default Team;