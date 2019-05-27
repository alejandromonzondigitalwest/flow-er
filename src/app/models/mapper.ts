export class Mapper {

   constructor(_id = '', mapper = '',version = '') {
        this._id = _id;
        this.mapper = mapper;
        this.version = version;
    }

    _id: string;
    mapper: string;
    version: string;
    }