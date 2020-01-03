import { IGlob } from '../interfaces/IGlob';
import { IPath } from '../interfaces/IPath';
import { IResolveUrl } from '../interfaces/IResolveUrl';
import { ISassGlobPattern } from '../interfaces/ISassGlobPattern';
export declare function resolveUrlFactory(glob: IGlob, path: IPath, sassGlobPattern: ISassGlobPattern): IResolveUrl;
