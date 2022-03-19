/*
 * Copyright Truesense AI Solutions Pvt Ltd, All Rights Reserved.
 */

import { BaseCommand } from './base-command';
import { TvLaneSection } from '../../modules/tv-map/models/tv-lane-section';
import { TvLane } from '../../modules/tv-map/models/tv-lane';
import { TvMapSourceFile } from '../../modules/tv-map/services/tv-map-source-file';

export class RemoveLaneCommand extends BaseCommand {

    constructor ( private laneSection: TvLaneSection, private lane: TvLane ) {

        super();

    }

    execute (): void {

        this.laneSection.removeLaneById( this.lane.id );

        TvMapSourceFile.roadNetworkChanged.emit( this.openDrive );

    }

    undo (): void {

        this.laneSection.addLaneInstance( this.lane, true );

        TvMapSourceFile.roadNetworkChanged.emit( this.openDrive );

    }

    redo (): void {

        this.execute();

    }

}