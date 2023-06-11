import { OscFile } from './osc-common';

export class OscProperties {

	public properties: OscProperty[];
	public files: OscFile[];

}

export class OscProperty {

	public name: string;
	public value: string;

}
