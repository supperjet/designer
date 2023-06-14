/*
 * Copyright Truesense AI Solutions Pvt Ltd, All Rights Reserved.
 */

import { AbstractPosition } from './abstract-position';
import { RouteStrategy } from './tv-enums';
import { ParameterDeclaration } from './tv-parameter-declaration';

export class Waypoint {

	constructor (
		public position: AbstractPosition,
		public strategy: RouteStrategy
	) {
	}
}

export class Route {

	public name: string;
	public closed: boolean;

	public parameterDeclaration: ParameterDeclaration[] = [];
	public waypoints: Waypoint[] = [];

}