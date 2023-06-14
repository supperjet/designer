/*
 * Copyright Truesense AI Solutions Pvt Ltd, All Rights Reserved.
 */

import { Time } from '../../../../core/time';
import { ConditionCategory, ConditionType, Rule } from '../tv-enums';
import { AbstractByValueCondition } from './abstract-by-value-condition';

export class SimulationTimeCondition extends AbstractByValueCondition {

	public category: ConditionCategory = ConditionCategory.ByValue;
	public readonly conditionType = ConditionType.ByValue_SimulationTime;

	constructor ( public value: number = 0, public rule: Rule = Rule.greater_than ) {
		super();
	}

	hasPassed (): boolean {

		if ( this.passed ) {

			return true;

		} else {

			return this.passed = this.hasRulePassed( this.rule, Time.inSeconds, this.value );

		}
	}
}