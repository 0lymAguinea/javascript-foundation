// eslint-disable-next-line max-classes-per-file
class HashMap {
  constructor() {
    this.map = {};
  }

  // Hash a key
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      const char = key.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32-bit integer
    }
    return hash;
  }

  // Create a key value pair
  set(key, value) {
    const hashedKey = this.hash(key);
    this.map[hashedKey] = value;
    return this.map;
  }

  // Return the value of the key
  get(key) {
    const hashedKey = this.hash(key);
    if (Object.prototype.hasOwnProperty.call(this.map, hashedKey)) {
      return this.map[hashedKey];
    }
    return null;
  }

  // Return true if key is in the map
  has(key) {
    const hashedKey = this.hash(key);
    return Object.prototype.hasOwnProperty.call(this.map, hashedKey);
  }

  // Remove a bucket by its key
  remove(key) {
    const hashedKey = this.hash(key);
    delete this.map[hashedKey];
  }

  // Return the number of stored keys
  length() {
    return Object.keys(this.map).length;
  }

  // Clear all entries
  clear() {
    this.map = {};
  }

  // Get keys
  keys() {
    return Object.keys(this.map);
  }

  // Get values
  values() {
    return Object.values(this.map);
  }

  // Get keys and values
  entries() {
    return Object.entries(this.map);
  }
}

const newHash = new HashMap();

newHash.set("H", "Harry");
newHash.set("L", "Logan");
console.log(newHash);
