/*
 * Copyright Truesense AI Solutions Pvt Ltd, All Rights Reserved.
 */

import { TvLane } from 'app/modules/tv-map/models/tv-lane';
import { TvRoad } from 'app/modules/tv-map/models/tv-road.model';
import { BaseCommand } from '../../commands/base-command';
import { ICommand } from '../../commands/i-command';
import { LaneMarkingTool } from './lane-marking-tool';
import { UnselectRoadmarkNodeCommand } from './unselect-roadmark-node-command';

export class SelectLaneForRoadMarkCommand extends BaseCommand {

	private newRoad: TvRoad;

	private oldRoad: TvRoad;
	private oldLane: TvLane;

	private unselectCommand: ICommand;

	constructor ( private tool: LaneMarkingTool, private newLane: TvLane ) {

		super();

		this.oldLane = tool.lane;

		if ( newLane ) this.newRoad = this.map.getRoadById( this.newLane.roadId );
		if ( this.oldLane ) this.oldRoad = this.map.getRoadById( this.oldLane.roadId );

		this.unselectCommand = new UnselectRoadmarkNodeCommand( this.tool, this.tool.node );

	}

	execute (): void {

		this.oldRoad?.hideLaneMarkingNodes();

		this.tool.laneHelper.clear();

		this.newRoad?.showLaneMarkingNodes();

		this.tool.laneHelper.drawRoad( this.newRoad );

		this.tool.lane = this.newLane;

		this.unselectCommand.execute();
	}

	undo (): void {

		this.newRoad?.hideLaneMarkingNodes();

		this.tool.laneHelper.clear();

		this.oldRoad?.showLaneMarkingNodes();

		this.tool.laneHelper.drawRoad( this.oldRoad );

		this.tool.lane = this.oldLane;

		this.unselectCommand.undo();
	}

	redo (): void {

		this.execute();

	}

}
