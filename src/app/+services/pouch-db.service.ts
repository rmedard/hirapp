import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable({
    providedIn: 'root'
})
export class PouchDBService {

    // @ts-ignore
    localDb: PouchDB;
    // @ts-ignore
    remoteDb: PouchDB;

    constructor() {
        this.initDB();
    }

    initDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        PouchDB.plugin(PouchdbFind);
        this.localDb = new PouchDB('hirLocal', {adapter: 'cordova-sqlite'});
        this.remoteDb = new PouchDB('http://li1659-167.members.linode.com:5984/hir');
        const options = {
            live: true,
            retry: true,
            continuous: true
        };
        PouchDB.replicate(this.remoteDb, this.localDb, options).then(() => {
            console.log('Replicating...');
        });
    }

    createIndex() {
        return this.localDb.createIndex({
            index: {
                fields: ['_id', 'type.[].target_id', 'field_advert_type', 'field_advert_reference'],
                name: 'main-index',
                ddoc: 'main-design-doc',
                type: 'json'
            }
        }).then(result => console.log(result)).catch(error => console.log(error));
    }
}
