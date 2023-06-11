import { OscParameterDeclaration } from './osc-parameter-declaration';
import { OscBoundingBox } from './osc-bounding-box';
import { OscProperties } from './osc-properties';
import { OscPedestrianCategory } from './osc-enums';
import { IScenarioObject } from './osc-interfaces';

export class OscPedestrian extends IScenarioObject {

	private m_Name: string;
	private m_Model: string;
	private m_Mass: string;
	private m_Category: OscPedestrianCategory;
	private m_ParameterDeclarations: OscParameterDeclaration[];
	private m_BoundingBox: OscBoundingBox;
	private m_Properties: OscProperties;

}
