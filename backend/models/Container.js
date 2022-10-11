const fs = require('fs/promises');

module.exports = class Products {
  constructor(name) {
    this.name = name;
  }

  async getFile() {
    try {
      const content = await fs.readFile(`./${this.name}`, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.log(error);
    }
  }

  async assignId(obj) {
    try {
      const file = await this.getFile();
      if (!file.length) {
        obj.id = 0;
        return;
      }
      const lastIndex = file.length - 1;
      const lastId = file[lastIndex].id;
      obj.id = lastId + 1;
    } catch (error) {
      console.error(error);
    }
  }

  async assignRandomId(obj) {
    try {
      const file = await this.getFile();
      const randomNumber = Math.floor(Math.random() * 10000);
      obj.id = randomNumber;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const file = await this.getFile();
      // console.log(file)
      return file;
    } catch (error) {
      console.log(error);
    }
  }

  async save(obj) {
    try {
      const file = await this.getFile();
      file.push(obj);
      await fs.writeFile(`./${this.name}`, JSON.stringify(file, null, 2));
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const file = await this.getFile();
      const array = file.filter((product) => product.id === +id);
      if (array.length === 0) {
        return false;
      } else {
        return array[0];
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const file = await this.getFile();
      const filteredArray = file.filter((product) => product.id !== +id);
      console.log(filteredArray);
      if (filteredArray.length === file.length) {
        return { error: 'producto no encontrado' };
      } else {
        await fs.writeFile(
          `./${this.name}`,
          JSON.stringify(filteredArray, null, 2)
        );
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      const empty = [];
      await fs.writeFile(`./${this.name}`, JSON.stringify(empty));
    } catch (error) {
      console.log(error);
    }
  }

  async update(obj, newObj) {
    const file = await this.getFile();
    const id = obj.id;
    await this.deleteById(obj.id);
    // newObj.id = id;
    // console.log(newObj.id);
    this.save(newObj);
  }
};
