/*
 * Copyright Truesense AI Solutions Pvt Ltd, All Rights Reserved.
 */

import { Time } from '../../../../core/time';
import { ScenarioInstance } from '../../services/scenario-instance';
import { VehicleEntity } from '../entities/vehicle-entity';
import { TvScenario } from '../tv-scenario';
import { StandStillCondition } from './tv-stand-still-condition';


describe( 'StandStillCondition', () => {

	let condition: StandStillCondition;

	beforeEach( () => {

		Time.reset();

		ScenarioInstance.scenario = new TvScenario();

		const entityObject = new VehicleEntity( 'ego' );

		ScenarioInstance.scenario.addObject( entityObject );

		condition = new StandStillCondition( 1 );

		condition.addTriggeringEntity( entityObject.name );

	} );


	it( 'should condition to pass if delta time is equal or greater than duration', ( () => {

		expect( condition.hasPassed() ).toBe( false );

		Time.fixedDeltaTime = 1000;

		expect( condition.hasPassed() ).toBe( true );

	} ) );


} );
