/*
 * Copyright Truesense AI Solutions Pvt Ltd, All Rights Reserved.
 */

import { Vector3 } from 'three';
import { PositionType } from '../tv-enums';
import { AbstractPosition } from '../tv-interfaces';
import { Orientation } from '../tv-orientation';

export class RelativeWorldPosition extends AbstractPosition {

	public readonly type = PositionType.RelativeWorld;

	private object: string;
	private dx: number;
	private dy: number;
	private dz: number;
	private orientation: Orientation;

	exportXml () {

		throw new Error( 'Method not implemented.' );

	}

	toVector3 (): Vector3 {

		console.error( 'Method not implemented.' );

		return new Vector3();

	}


}