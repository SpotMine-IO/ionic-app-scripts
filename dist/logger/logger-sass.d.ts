import { BuildContext, Diagnostic } from '../util/interfaces';
import { LegacyException as SassError } from 'sass';
export declare function runSassDiagnostics(context: BuildContext, sassError: SassError): Diagnostic[];
