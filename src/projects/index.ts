import { IClientApi } from '../client';
import Locatable from '../locatable';
import { IProjectLocator } from '../locators/project-locator';
import BuildTypes from '../build-types';

export default class Projects extends Locatable<IProjectLocator> {

  buildTypes: BuildTypes

  constructor(client: IClientApi, parent?: Locatable<any>, path?: string) {
    super(client, parent, path || '/app/rest/projects');

    this.buildTypes = new BuildTypes(this.client, this, '/buildTypes');
  }

  parameters = {}

  create(project: any, cb?: (result: any) => void) {
    return this.client._post(this.getPath(), project, cb);
  }

  // TODO: Not sure about this
  destroy(cb?: (result: any) => void) {}

  field(field: any, cb?: (result: any) => void) {
    return this.client._get(this.getPath(field), cb);
  }
}