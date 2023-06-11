import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'app/services/file.service';
import { OscFile } from '../../models/osc-common';
import { OscSourceFile } from '../../services/osc-source-file';
import { IFile } from '../../../../core/models/file';
import { OpenDriveApiService } from '../../../../core/services/open-drive-api.service';
import { TvMapService } from 'app/modules/tv-map/services/tv-map.service';
import { Debug } from 'app/core/utils/debug';

@Component( {
	selector: 'app-edit-road-network-dialog',
	templateUrl: './edit-road-network-dialog.component.html',
	styleUrls: [ './edit-road-network-dialog.component.css' ]
} )
export class EditRoadNetworkDialogComponent implements OnInit {

	public selectedRoadNetwork: any;
	public files: any[] = [];
	public file: IFile;

	constructor (
		public dialogRef: MatDialogRef<any>,
		@Inject( MAT_DIALOG_DATA ) public data: any,
		private fileService: FileService,
		private openDriveApi: OpenDriveApiService,
		private openDriveService: TvMapService
	) {
	}

	get openScenario () {
		return OscSourceFile.openScenario;
	}

	get roadNetwork () {
		return OscSourceFile.openScenario.roadNetwork;
	}

	get logics () {
		return OscSourceFile.openScenario.roadNetwork.logics;
	}

	get sceneGraph () {
		return OscSourceFile.openScenario.roadNetwork.sceneGraph;
	}

	get currentFile () {
		return OscSourceFile.currentFile;
	}

	ngOnInit () {

	}

	selectRoadNetwork () {

		this.changeRoadNetwork();

	}

	changeRoadNetwork () {

		if ( this.currentFile.online ) {

			this.fetchOnlinesFiles();

		} else {

			this.openLocalFile();

		}
	}

	selectSceneGraph () {
	}

	changeSceneGraph () {
	}

	onRoadNetworkSelected ( filename ) {

		this.setRoadNetworkFileName( filename );

	}

	setRoadNetworkFileName ( filename ) {

		this.roadNetwork.logics = new OscFile( filename );

	}

	fetchOnlinesFiles () {

		this.openDriveApi.getAll().subscribe( files => {

			this.files = files;

		} );
	}

	openLocalFile () {

		// this.fileService.import( null, 'road-network', [ 'xml' ], ( file: IFile ) => {

		//     this.file = file;

		//     this.setRoadNetworkFileName( file.path );

		// } );
	}

	importAndBuild ( file: IFile ) {

		this.openDriveService.import( file, () => {

			Debug.log( 'road network imported' );

		} );

		this.dialogRef.close();

	}
}
