
import moment from 'moment';


class FileNode {

  constructor( name, user ) {
    this.permissions = 755;
    this.name = '';
    this.owner = user;
    this.group = 'staff';
    this.lastModified = moment();
    this.isDirectory = true;
    this.bytes = 0;
    this.items = 1;
    this.children = {};
  }

  toString() {
    return [
      !!this.isDirectory ? 'd' : '-',
      this.items,
      this.owner,
      this.group,
      this.bytes,
      this.lastModified.format('MMM DD HH:mm:ss'),
      this.name,
    ].join(' ')
  }

}


class FileTreeService {

  constructor() {
    this.tree = {
      '/': new FileNode('/')
    };
  }
}
