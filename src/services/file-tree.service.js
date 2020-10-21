
import moment from 'moment';


class FileNode {

  constructor( name, user ) {
    this.permissions = 755;
    this.name = '';
    this.owner = user;
    this.group = 'staff';
    this.lastModified = moment();
    this.nodeType = 'd'; // directory
    this.bytes = 0;
    this.items = 1;
    this.children = {};
  }


}


class FileTreeService {

  constructor() {
    this.tree = {
      '/': new FileNode('/')
    };
  }
}
