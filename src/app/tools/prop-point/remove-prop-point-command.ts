import { SetInspectorCommand } from 'app/commands/set-inspector-command';
import { BaseCommand } from '../../commands/base-command';
import { PropInstance } from '../../core/models/prop-instance.model';
import { PropPointTool } from './prop-point-tool';
import { SceneService } from 'app/services/scene.service';
import { DynamicControlPoint } from 'app/modules/three-js/objects/dynamic-control-point';

export class RemovePropCommand extends BaseCommand {

	private point: DynamicControlPoint<PropInstance>;
	private inspectorCommand: BaseCommand;

	constructor ( private prop: PropInstance ) {

		super();

		this.point = this.getTool<PropPointTool>()?.points.find( point => point.mainObject == prop );

		this.inspectorCommand = new SetInspectorCommand( null, null );

	}

	execute (): void {

		SceneService.removeFromMain( this.prop );

		SceneService.removeFromMain( this.point );

		this.map.props.splice( this.map.props.indexOf( this.prop ), 1 );

		this.getTool<PropPointTool>()?.points.splice( this.getTool<PropPointTool>()?.points.indexOf( this.point ), 1 );

		this.getTool<PropPointTool>()?.setPoint( null );

		this.inspectorCommand.execute();
	}

	undo (): void {

		SceneService.addToMain( this.prop );

		SceneService.addToMain( this.point );

		this.map.props.push( this.prop );

		this.getTool<PropPointTool>()?.points.push( this.point );

		this.getTool<PropPointTool>()?.setPoint( this.point );

		this.inspectorCommand.undo();

	}

	redo (): void {

		this.execute();

	}

}