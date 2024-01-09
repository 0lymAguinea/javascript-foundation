class HashMap {
  constructor() {
    this.map = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      const char = key.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32-bit integer
    }
    return hash;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    this.map[hashedKey] = value;
    return this.map;
  }
}

const newHash = new HashMap();
newHash.set("H", "Harry");
console.log(newHash);
