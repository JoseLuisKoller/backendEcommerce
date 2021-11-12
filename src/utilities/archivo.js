const fs = require("fs");
class Archivo {
  constructor(path) {
    this.filePath = path;
  }

  save = async (Object) => {
    const objList = await this.getAll();
    const objById = objList.find((object) => object.id === Object.id);
    if (!objById) {
      let newId = 1;
      objList.length ? (newId = objList[objList.length - 1].id + 1) : newId;
      try {
        await fs.promises.writeFile(
          this.filePath,
          JSON.stringify(objList, null, 1)
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(`El objeto ya existe y su id es ${objById.id}`);
    }
  };

  getById = async (Number) => {
    const objList = await this.getAll();
    const objById = objList.find((object) => object.id === Number);
    if (objById) return objById;
  };

  getAll = async () => {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  };

  deleteById = async (Number) => {
    const objList = await this.getAll();
    const objFound = objList.find((object) => object.id === Number);
    if (objFound) {
      const elements = objList.filter((object) => object.id !== objFound.id);
      try {
        await fs.promises.writeFile(
          this.filePath,
          JSON.stringify(elements, null, 1)
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  update = async (Object) => {
    this.elements.push(Object);
  };
}

module.exports = Archivo;
