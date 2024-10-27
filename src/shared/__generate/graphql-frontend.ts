import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	BigDecimal: { input: any; output: any };
	Byte: { input: any; output: any };
	Char: { input: any; output: any };
	Long: { input: any; output: any };
	Short: { input: any; output: any };
	_ByteArray: { input: any; output: any };
	_Date: { input: any; output: any };
	_DateTime: { input: any; output: any };
	_Float4: { input: any; output: any };
	_OffsetDateTime: { input: any; output: any };
	_Time: { input: any; output: any };
};

export const UpdateClinicTableDocument = gql`
	mutation updateClinicTableEntry($input: _UpdateClinicTableInput!) {
		packet {
			updateClinicTable(input: $input) {
				id
				beginDate
				endDate
				comment
				clinicOffice {
					id
					officeNumber
				}
				customer {
					entityId
					entity {
						person {
							entityId
							entity {
								firstName
								lastName
							}
						}
					}
				}
				clinicDoctor {
					id
					doctor {
						entityId
						entity {
							person {
								entityId
								entity {
									firstName
									lastName
								}
							}
						}
					}
				}
			}
		}
	}
`;

export type Clinic = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	classOfficeList: _Ec_ClinicOffice;
	clinicDoctorList: _Ec_ClinicDoctor;
	clinicTableList: _Ec_ClinicTable;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type ClinicClassOfficeListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type ClinicClinicDoctorListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type ClinicClinicTableListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type ClinicDoctor = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<Clinic>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	clinic: Clinic;
	clinicDoctorAvailabilityList: _Ec_ClinicDoctorAvailability;
	doctor: _G_DoctorReference;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type ClinicDoctorAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicDoctorClinicArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicDoctorClinicDoctorAvailabilityListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type ClinicDoctorAvailability = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<Clinic>;
	beginDate: Scalars["_DateTime"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	clinicDoctor: ClinicDoctor;
	clinicOffice: ClinicOffice;
	endDate: Scalars["_DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type ClinicDoctorAvailabilityAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicDoctorAvailabilityClinicDoctorArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicDoctorAvailabilityClinicOfficeArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicOffice = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<Clinic>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	clinic: Clinic;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	officeNumber?: Maybe<Scalars["String"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type ClinicOfficeAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicOfficeClinicArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicTable = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<Clinic>;
	beginDate: Scalars["_DateTime"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	clinic: Clinic;
	clinicDoctor: ClinicDoctor;
	clinicOffice: ClinicOffice;
	comment?: Maybe<Scalars["String"]["output"]>;
	customer: _G_CustomerReference;
	endDate: Scalars["_DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type ClinicTableAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicTableClinicArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicTableClinicDoctorArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicTableClinicOfficeArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type Customer = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	insurancePolicyNumber: Scalars["String"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	person: _G_PersonReference;
	phoneNumber?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type Doctor = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	doctorType: DoctorType;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	person: _G_PersonReference;
	type: Scalars["String"]["output"];
};

export type DoctorDoctorTypeArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type DoctorType = {
	_calc: _Calculation;
	aggregateRoot?: Maybe<RootDictionary>;
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	isDel: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	type: Scalars["String"]["output"];
};

export type DoctorTypeAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type Person = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	birthDate?: Maybe<Scalars["_Date"]["output"]>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	firstName: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	inn?: Maybe<Scalars["String"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	lastName: Scalars["String"]["output"];
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type RootDictionary = {
	_calc: _Calculation;
	id: Scalars["ID"]["output"];
	type: Scalars["String"]["output"];
};

export type Stakeholder = {
	_calc: _Calculation;
	aggregateRoot?: Maybe<RootDictionary>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
};

export type StakeholderAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type Status = {
	_calc: _Calculation;
	aggregateRoot?: Maybe<RootDictionary>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	initial?: Maybe<Scalars["Boolean"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	stakeholder?: Maybe<Stakeholder>;
	statusType?: Maybe<Scalars["String"]["output"]>;
};

export type StatusAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type StatusStakeholderArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type StatusGraph = {
	_calc: _Calculation;
	aggregateRoot?: Maybe<RootDictionary>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	label?: Maybe<Scalars["String"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	statusFrom?: Maybe<Status>;
	statusTo?: Maybe<Status>;
};

export type StatusGraphAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type StatusGraphStatusFromArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type StatusGraphStatusToArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysAdminSettings = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<SysRootSecurity>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	key?: Maybe<Scalars["String"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	rootSecurity: SysRootSecurity;
	value?: Maybe<Scalars["String"]["output"]>;
};

export type SysAdminSettingsAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysAdminSettingsRootSecurityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysCheckSelect = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<SysRootSecurity>;
	beforeCommitEnable?: Maybe<Scalars["Boolean"]["output"]>;
	beforeOperationDisable?: Maybe<Scalars["Boolean"]["output"]>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	conditionValue?: Maybe<Scalars["String"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	operation: SysOperation;
	orderValue?: Maybe<Scalars["Int"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	typeName?: Maybe<Scalars["String"]["output"]>;
};

export type SysCheckSelectAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysCheckSelectOperationArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysOperation = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<SysRootSecurity>;
	allowEmptyChecks?: Maybe<Scalars["Boolean"]["output"]>;
	body?: Maybe<Scalars["String"]["output"]>;
	checkSelects: _Ec_SysCheckSelect;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	disableJwtVerification?: Maybe<Scalars["Boolean"]["output"]>;
	hashValue?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	paramAdditions: _Ec_SysParamAddition;
	rootSecurity: SysRootSecurity;
};

export type SysOperationAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysOperationCheckSelectsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type SysOperationParamAdditionsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type SysOperationRootSecurityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysParamAddition = {
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	aggregateRoot?: Maybe<SysRootSecurity>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	operation: SysOperation;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	paramAddition?: Maybe<Scalars["String"]["output"]>;
	paramName?: Maybe<Scalars["String"]["output"]>;
};

export type SysParamAdditionAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysParamAdditionOperationArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type SysRootSecurity = {
	_calc: _Calculation;
	adminSettings: _Ec_SysAdminSettings;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	operations: _Ec_SysOperation;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type SysRootSecurityAdminSettingsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type SysRootSecurityOperationsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _Calculation = {
	__typename?: "_Calculation";
	bigDecimal?: Maybe<Scalars["BigDecimal"]["output"]>;
	boolean?: Maybe<Scalars["Boolean"]["output"]>;
	byte?: Maybe<Scalars["Byte"]["output"]>;
	byteArray?: Maybe<Scalars["_ByteArray"]["output"]>;
	char?: Maybe<Scalars["Char"]["output"]>;
	date?: Maybe<Scalars["_Date"]["output"]>;
	dateTime?: Maybe<Scalars["_DateTime"]["output"]>;
	double?: Maybe<Scalars["Float"]["output"]>;
	float?: Maybe<Scalars["_Float4"]["output"]>;
	int?: Maybe<Scalars["Int"]["output"]>;
	long?: Maybe<Scalars["Long"]["output"]>;
	offsetDateTime?: Maybe<Scalars["_OffsetDateTime"]["output"]>;
	short?: Maybe<Scalars["Short"]["output"]>;
	string?: Maybe<Scalars["String"]["output"]>;
	time?: Maybe<Scalars["_Time"]["output"]>;
};

export type _CalculationBigDecimalArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationBooleanArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationByteArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationByteArrayArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationCharArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationDateArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationDateTimeArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationDoubleArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationFloatArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationIntArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationLongArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationOffsetDateTimeArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationShortArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationStringArgs = {
	expr: Scalars["String"]["input"];
};

export type _CalculationTimeArgs = {
	expr: Scalars["String"]["input"];
};

export type _CompareClinicDoctorAvailabilityInput = {
	beginDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
	endDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
};

export type _CompareClinicInput = {
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CompareClinicOfficeInput = {
	officeNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CompareClinicTableInput = {
	beginDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
	comment?: InputMaybe<Scalars["String"]["input"]>;
	endDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
};

export type _CompareCustomerInput = {
	insurancePolicyNumber?: InputMaybe<Scalars["String"]["input"]>;
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CompareDoctorTypeInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type _ComparePersonInput = {
	birthDate?: InputMaybe<Scalars["_Date"]["input"]>;
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	inn?: InputMaybe<Scalars["String"]["input"]>;
	lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CreateClinicDoctorAvailabilityInput = {
	beginDate: Scalars["_DateTime"]["input"];
	clinicDoctor: Scalars["ID"]["input"];
	clinicOffice: Scalars["ID"]["input"];
	endDate: Scalars["_DateTime"]["input"];
};

export type _CreateClinicDoctorInput = {
	clinic: Scalars["ID"]["input"];
	doctor: _SingleReferenceInput;
};

export type _CreateClinicInput = {
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CreateClinicOfficeInput = {
	clinic: Scalars["ID"]["input"];
	officeNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CreateClinicTableInput = {
	beginDate: Scalars["_DateTime"]["input"];
	clinic: Scalars["ID"]["input"];
	clinicDoctor: Scalars["ID"]["input"];
	clinicOffice: Scalars["ID"]["input"];
	comment?: InputMaybe<Scalars["String"]["input"]>;
	customer: _SingleReferenceInput;
	endDate: Scalars["_DateTime"]["input"];
};

export type _CreateCustomerInput = {
	insurancePolicyNumber: Scalars["String"]["input"];
	person: _SingleReferenceInput;
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type _CreateDoctorInput = {
	doctorType: Scalars["ID"]["input"];
	person: _SingleReferenceInput;
};

export type _CreateDoctorTypeInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["ID"]["input"];
	isDel: Scalars["Boolean"]["input"];
	name: Scalars["String"]["input"];
};

export type _CreatePersonInput = {
	birthDate?: InputMaybe<Scalars["_Date"]["input"]>;
	firstName: Scalars["String"]["input"];
	inn?: InputMaybe<Scalars["String"]["input"]>;
	lastName: Scalars["String"]["input"];
};

export type _DeleteManyClinicDoctorAvailabilityInput = {
	compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
	id: Scalars["ID"]["input"];
};

export type _DeleteManyClinicInput = {
	compare?: InputMaybe<_CompareClinicInput>;
	id: Scalars["ID"]["input"];
};

export type _DeleteManyClinicOfficeInput = {
	compare?: InputMaybe<_CompareClinicOfficeInput>;
	id: Scalars["ID"]["input"];
};

export type _DeleteManyClinicTableInput = {
	compare?: InputMaybe<_CompareClinicTableInput>;
	id: Scalars["ID"]["input"];
};

export type _DeleteManyCustomerInput = {
	compare?: InputMaybe<_CompareCustomerInput>;
	id: Scalars["ID"]["input"];
};

export type _DeleteManyPersonInput = {
	compare?: InputMaybe<_ComparePersonInput>;
	id: Scalars["ID"]["input"];
};

export enum _DependsOnDependencyByGet {
	Exists = "EXISTS",
	NotExists = "NOT_EXISTS",
}

export enum _DependsOnDependencyByUpdateOrCreate {
	Created = "CREATED",
	NotCreated = "NOT_CREATED",
}

export type _DictionaryPacket = {
	__typename?: "_DictionaryPacket";
	getDoctorType?: Maybe<DoctorType>;
	updateOrCreateDoctorType?: Maybe<_UpdateOrCreateDoctorTypeResponse>;
	updateOrCreateManyDoctorType?: Maybe<Array<Maybe<_UpdateOrCreateManyResponse>>>;
};

export type _DictionaryPacketGetDoctorTypeArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _DictionaryPacketUpdateOrCreateDoctorTypeArgs = {
	exist?: InputMaybe<_ExistDoctorTypeInput>;
	input: _CreateDoctorTypeInput;
};

export type _DictionaryPacketUpdateOrCreateManyDoctorTypeArgs = {
	input: Array<InputMaybe<_UpdateOrCreateManyDoctorTypeInput>>;
};

export type _Ec_Clinic = {
	__typename?: "_EC_Clinic";
	count: Scalars["Int"]["output"];
	elems: Array<Clinic>;
};

export type _Ec_ClinicDoctor = {
	__typename?: "_EC_ClinicDoctor";
	count: Scalars["Int"]["output"];
	elems: Array<ClinicDoctor>;
};

export type _Ec_ClinicDoctorAvailability = {
	__typename?: "_EC_ClinicDoctorAvailability";
	count: Scalars["Int"]["output"];
	elems: Array<ClinicDoctorAvailability>;
};

export type _Ec_ClinicOffice = {
	__typename?: "_EC_ClinicOffice";
	count: Scalars["Int"]["output"];
	elems: Array<ClinicOffice>;
};

export type _Ec_ClinicTable = {
	__typename?: "_EC_ClinicTable";
	count: Scalars["Int"]["output"];
	elems: Array<ClinicTable>;
};

export type _Ec_Customer = {
	__typename?: "_EC_Customer";
	count: Scalars["Int"]["output"];
	elems: Array<Customer>;
};

export type _Ec_Doctor = {
	__typename?: "_EC_Doctor";
	count: Scalars["Int"]["output"];
	elems: Array<Doctor>;
};

export type _Ec_DoctorType = {
	__typename?: "_EC_DoctorType";
	count: Scalars["Int"]["output"];
	elems: Array<DoctorType>;
};

export type _Ec_Person = {
	__typename?: "_EC_Person";
	count: Scalars["Int"]["output"];
	elems: Array<Person>;
};

export type _Ec_RootDictionary = {
	__typename?: "_EC_RootDictionary";
	count: Scalars["Int"]["output"];
	elems: Array<RootDictionary>;
};

export type _Ec_Stakeholder = {
	__typename?: "_EC_Stakeholder";
	count: Scalars["Int"]["output"];
	elems: Array<Stakeholder>;
};

export type _Ec_Status = {
	__typename?: "_EC_Status";
	count: Scalars["Int"]["output"];
	elems: Array<Status>;
};

export type _Ec_StatusGraph = {
	__typename?: "_EC_StatusGraph";
	count: Scalars["Int"]["output"];
	elems: Array<StatusGraph>;
};

export type _Ec_SysAdminSettings = {
	__typename?: "_EC_SysAdminSettings";
	count: Scalars["Int"]["output"];
	elems: Array<SysAdminSettings>;
};

export type _Ec_SysCheckSelect = {
	__typename?: "_EC_SysCheckSelect";
	count: Scalars["Int"]["output"];
	elems: Array<SysCheckSelect>;
};

export type _Ec_SysOperation = {
	__typename?: "_EC_SysOperation";
	count: Scalars["Int"]["output"];
	elems: Array<SysOperation>;
};

export type _Ec_SysParamAddition = {
	__typename?: "_EC_SysParamAddition";
	count: Scalars["Int"]["output"];
	elems: Array<SysParamAddition>;
};

export type _Ec_SysRootSecurity = {
	__typename?: "_EC_SysRootSecurity";
	count: Scalars["Int"]["output"];
	elems: Array<SysRootSecurity>;
};

export type _E_Clinic = Clinic &
	_Entity & {
		__typename?: "_E_Clinic";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		classOfficeList: _Ec_ClinicOffice;
		clinicDoctorList: _Ec_ClinicDoctor;
		clinicTableList: _Ec_ClinicTable;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		name?: Maybe<Scalars["String"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_ClinicClassOfficeListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_ClinicClinicDoctorListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_ClinicClinicTableListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_ClinicDoctor = ClinicDoctor &
	_Entity & {
		__typename?: "_E_ClinicDoctor";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<Clinic>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		clinic: Clinic;
		clinicDoctorAvailabilityList: _Ec_ClinicDoctorAvailability;
		doctor: _G_DoctorReference;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_ClinicDoctorAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicDoctorClinicArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicDoctorClinicDoctorAvailabilityListArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_ClinicDoctorAvailability = ClinicDoctorAvailability &
	_Entity & {
		__typename?: "_E_ClinicDoctorAvailability";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<Clinic>;
		beginDate: Scalars["_DateTime"]["output"];
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		clinicDoctor: ClinicDoctor;
		clinicOffice: ClinicOffice;
		endDate: Scalars["_DateTime"]["output"];
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_ClinicDoctorAvailabilityAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicDoctorAvailabilityClinicDoctorArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicDoctorAvailabilityClinicOfficeArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicOffice = ClinicOffice &
	_Entity & {
		__typename?: "_E_ClinicOffice";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<Clinic>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		clinic: Clinic;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		officeNumber?: Maybe<Scalars["String"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_ClinicOfficeAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicOfficeClinicArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicTable = ClinicTable &
	_Entity & {
		__typename?: "_E_ClinicTable";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<Clinic>;
		beginDate: Scalars["_DateTime"]["output"];
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		clinic: Clinic;
		clinicDoctor: ClinicDoctor;
		clinicOffice: ClinicOffice;
		comment?: Maybe<Scalars["String"]["output"]>;
		customer: _G_CustomerReference;
		endDate: Scalars["_DateTime"]["output"];
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_ClinicTableAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicTableClinicArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicTableClinicDoctorArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_ClinicTableClinicOfficeArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_Customer = Customer &
	_Entity & {
		__typename?: "_E_Customer";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		id: Scalars["ID"]["output"];
		insurancePolicyNumber: Scalars["String"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		person: _G_PersonReference;
		phoneNumber?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_Doctor = Doctor &
	_Entity & {
		__typename?: "_E_Doctor";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		doctorType: DoctorType;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		person: _G_PersonReference;
		type: Scalars["String"]["output"];
	};

export type _E_DoctorDoctorTypeArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_DoctorType = DoctorType &
	_Entity & {
		__typename?: "_E_DoctorType";
		_calc: _Calculation;
		aggregateRoot?: Maybe<RootDictionary>;
		description?: Maybe<Scalars["String"]["output"]>;
		id: Scalars["ID"]["output"];
		isDel: Scalars["Boolean"]["output"];
		name: Scalars["String"]["output"];
		type: Scalars["String"]["output"];
	};

export type _E_DoctorTypeAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_Person = Person &
	_Entity & {
		__typename?: "_E_Person";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		birthDate?: Maybe<Scalars["_Date"]["output"]>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		firstName: Scalars["String"]["output"];
		id: Scalars["ID"]["output"];
		inn?: Maybe<Scalars["String"]["output"]>;
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		lastName: Scalars["String"]["output"];
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_RootDictionary = RootDictionary &
	_Entity & {
		__typename?: "_E_RootDictionary";
		_calc: _Calculation;
		id: Scalars["ID"]["output"];
		type: Scalars["String"]["output"];
	};

export type _E_Stakeholder = Stakeholder &
	_Entity & {
		__typename?: "_E_Stakeholder";
		_calc: _Calculation;
		aggregateRoot?: Maybe<RootDictionary>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		code?: Maybe<Scalars["String"]["output"]>;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		name?: Maybe<Scalars["String"]["output"]>;
	};

export type _E_StakeholderAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_Status = Status &
	_Entity & {
		__typename?: "_E_Status";
		_calc: _Calculation;
		aggregateRoot?: Maybe<RootDictionary>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		code?: Maybe<Scalars["String"]["output"]>;
		description?: Maybe<Scalars["String"]["output"]>;
		id: Scalars["ID"]["output"];
		initial?: Maybe<Scalars["Boolean"]["output"]>;
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		name?: Maybe<Scalars["String"]["output"]>;
		stakeholder?: Maybe<Stakeholder>;
		statusType?: Maybe<Scalars["String"]["output"]>;
	};

export type _E_StatusAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_StatusStakeholderArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_StatusGraph = StatusGraph &
	_Entity & {
		__typename?: "_E_StatusGraph";
		_calc: _Calculation;
		aggregateRoot?: Maybe<RootDictionary>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		code?: Maybe<Scalars["String"]["output"]>;
		id: Scalars["ID"]["output"];
		label?: Maybe<Scalars["String"]["output"]>;
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		name?: Maybe<Scalars["String"]["output"]>;
		statusFrom?: Maybe<Status>;
		statusTo?: Maybe<Status>;
	};

export type _E_StatusGraphAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_StatusGraphStatusFromArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_StatusGraphStatusToArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysAdminSettings = SysAdminSettings &
	_Entity & {
		__typename?: "_E_SysAdminSettings";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<SysRootSecurity>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		id: Scalars["ID"]["output"];
		key?: Maybe<Scalars["String"]["output"]>;
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		rootSecurity: SysRootSecurity;
		value?: Maybe<Scalars["String"]["output"]>;
	};

export type _E_SysAdminSettingsAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysAdminSettingsRootSecurityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysCheckSelect = SysCheckSelect &
	_Entity & {
		__typename?: "_E_SysCheckSelect";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<SysRootSecurity>;
		beforeCommitEnable?: Maybe<Scalars["Boolean"]["output"]>;
		beforeOperationDisable?: Maybe<Scalars["Boolean"]["output"]>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		conditionValue?: Maybe<Scalars["String"]["output"]>;
		description?: Maybe<Scalars["String"]["output"]>;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		operation: SysOperation;
		orderValue?: Maybe<Scalars["Int"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		typeName?: Maybe<Scalars["String"]["output"]>;
	};

export type _E_SysCheckSelectAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysCheckSelectOperationArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysOperation = SysOperation &
	_Entity & {
		__typename?: "_E_SysOperation";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<SysRootSecurity>;
		allowEmptyChecks?: Maybe<Scalars["Boolean"]["output"]>;
		body?: Maybe<Scalars["String"]["output"]>;
		checkSelects: _Ec_SysCheckSelect;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		disableJwtVerification?: Maybe<Scalars["Boolean"]["output"]>;
		hashValue?: Maybe<Scalars["String"]["output"]>;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		paramAdditions: _Ec_SysParamAddition;
		rootSecurity: SysRootSecurity;
	};

export type _E_SysOperationAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysOperationCheckSelectsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_SysOperationParamAdditionsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_SysOperationRootSecurityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysParamAddition = SysParamAddition &
	_Entity & {
		__typename?: "_E_SysParamAddition";
		_calc: _Calculation;
		aggVersion: Scalars["Long"]["output"];
		aggregateRoot?: Maybe<SysRootSecurity>;
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		operation: SysOperation;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		paramAddition?: Maybe<Scalars["String"]["output"]>;
		paramName?: Maybe<Scalars["String"]["output"]>;
	};

export type _E_SysParamAdditionAggregateRootArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysParamAdditionOperationArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _E_SysRootSecurity = SysRootSecurity &
	_Entity & {
		__typename?: "_E_SysRootSecurity";
		_calc: _Calculation;
		adminSettings: _Ec_SysAdminSettings;
		aggVersion: Scalars["Long"]["output"];
		chgCnt?: Maybe<Scalars["Long"]["output"]>;
		id: Scalars["ID"]["output"];
		lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
		operations: _Ec_SysOperation;
		ownerId?: Maybe<Scalars["String"]["output"]>;
		type: Scalars["String"]["output"];
	};

export type _E_SysRootSecurityAdminSettingsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_SysRootSecurityOperationsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	elemAlias?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _Entity = {
	id: Scalars["ID"]["output"];
};

export type _ExistDoctorTypeInput = {
	compare?: InputMaybe<_CompareDoctorTypeInput>;
	update?: InputMaybe<_ExistUpdateDoctorTypeInput>;
};

export type _ExistUpdateDoctorTypeInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	isDel?: InputMaybe<Scalars["Boolean"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type _G_CustomerReference = {
	__typename?: "_G_CustomerReference";
	entity?: Maybe<Customer>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _G_CustomerReferenceEntityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _G_DoctorReference = {
	__typename?: "_G_DoctorReference";
	entity?: Maybe<Doctor>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _G_DoctorReferenceEntityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export type _G_PersonReference = {
	__typename?: "_G_PersonReference";
	entity?: Maybe<Person>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _G_PersonReferenceEntityArgs = {
	alias?: InputMaybe<Scalars["String"]["input"]>;
};

export enum _GetLockMode {
	NotUse = "NOT_USE",
	Nowait = "NOWAIT",
	Wait = "WAIT",
}

export type _MergedEntitiesCollection = {
	__typename?: "_MergedEntitiesCollection";
	count: Scalars["Int"]["output"];
	elems: Array<_Entity>;
};

export type _Mutation = {
	__typename?: "_Mutation";
	dictionaryPacket?: Maybe<_DictionaryPacket>;
	packet?: Maybe<_Packet>;
};

export type _MutationPacketArgs = {
	aggregateVersion?: InputMaybe<Scalars["Long"]["input"]>;
	enableBuffering?: InputMaybe<Scalars["Boolean"]["input"]>;
	idempotencePacketId?: InputMaybe<Scalars["String"]["input"]>;
};

export type _Packet = {
	__typename?: "_Packet";
	aggregateVersion?: Maybe<Scalars["Long"]["output"]>;
	createClinic?: Maybe<Clinic>;
	createClinicDoctor?: Maybe<ClinicDoctor>;
	createClinicDoctorAvailability?: Maybe<ClinicDoctorAvailability>;
	createClinicOffice?: Maybe<ClinicOffice>;
	createClinicTable?: Maybe<ClinicTable>;
	createCustomer?: Maybe<Customer>;
	createDoctor?: Maybe<Doctor>;
	createManyClinic?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyClinicDoctor?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyClinicDoctorAvailability?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyClinicOffice?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyClinicTable?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyCustomer?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyDoctor?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createManyPerson?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
	createPerson?: Maybe<Person>;
	deleteClinic?: Maybe<Scalars["String"]["output"]>;
	deleteClinicDoctor?: Maybe<Scalars["String"]["output"]>;
	deleteClinicDoctorAvailability?: Maybe<Scalars["String"]["output"]>;
	deleteClinicOffice?: Maybe<Scalars["String"]["output"]>;
	deleteClinicTable?: Maybe<Scalars["String"]["output"]>;
	deleteCustomer?: Maybe<Scalars["String"]["output"]>;
	deleteDoctor?: Maybe<Scalars["String"]["output"]>;
	deleteManyClinic?: Maybe<Scalars["String"]["output"]>;
	deleteManyClinicDoctor?: Maybe<Scalars["String"]["output"]>;
	deleteManyClinicDoctorAvailability?: Maybe<Scalars["String"]["output"]>;
	deleteManyClinicOffice?: Maybe<Scalars["String"]["output"]>;
	deleteManyClinicTable?: Maybe<Scalars["String"]["output"]>;
	deleteManyCustomer?: Maybe<Scalars["String"]["output"]>;
	deleteManyDoctor?: Maybe<Scalars["String"]["output"]>;
	deleteManyPerson?: Maybe<Scalars["String"]["output"]>;
	deletePerson?: Maybe<Scalars["String"]["output"]>;
	getClinic?: Maybe<Clinic>;
	getClinicDoctor?: Maybe<ClinicDoctor>;
	getClinicDoctorAvailability?: Maybe<ClinicDoctorAvailability>;
	getClinicOffice?: Maybe<ClinicOffice>;
	getClinicTable?: Maybe<ClinicTable>;
	getCustomer?: Maybe<Customer>;
	getDoctor?: Maybe<Doctor>;
	getDoctorType?: Maybe<DoctorType>;
	getPerson?: Maybe<Person>;
	getStakeholder?: Maybe<Stakeholder>;
	getStatus?: Maybe<Status>;
	getStatusGraph?: Maybe<StatusGraph>;
	isIdempotenceResponse?: Maybe<Scalars["Boolean"]["output"]>;
	updateClinic?: Maybe<Clinic>;
	updateClinicDoctor?: Maybe<ClinicDoctor>;
	updateClinicDoctorAvailability?: Maybe<ClinicDoctorAvailability>;
	updateClinicOffice?: Maybe<ClinicOffice>;
	updateClinicTable?: Maybe<ClinicTable>;
	updateCustomer?: Maybe<Customer>;
	updateDoctor?: Maybe<Doctor>;
	updateManyClinic?: Maybe<Scalars["String"]["output"]>;
	updateManyClinicDoctor?: Maybe<Scalars["String"]["output"]>;
	updateManyClinicDoctorAvailability?: Maybe<Scalars["String"]["output"]>;
	updateManyClinicOffice?: Maybe<Scalars["String"]["output"]>;
	updateManyClinicTable?: Maybe<Scalars["String"]["output"]>;
	updateManyCustomer?: Maybe<Scalars["String"]["output"]>;
	updateManyDoctor?: Maybe<Scalars["String"]["output"]>;
	updateManyPerson?: Maybe<Scalars["String"]["output"]>;
	updatePerson?: Maybe<Person>;
};

export type _PacketCreateClinicArgs = {
	input: _CreateClinicInput;
};

export type _PacketCreateClinicDoctorArgs = {
	input: _CreateClinicDoctorInput;
};

export type _PacketCreateClinicDoctorAvailabilityArgs = {
	input: _CreateClinicDoctorAvailabilityInput;
};

export type _PacketCreateClinicOfficeArgs = {
	input: _CreateClinicOfficeInput;
};

export type _PacketCreateClinicTableArgs = {
	input: _CreateClinicTableInput;
};

export type _PacketCreateCustomerArgs = {
	input: _CreateCustomerInput;
};

export type _PacketCreateDoctorArgs = {
	input: _CreateDoctorInput;
};

export type _PacketCreateManyClinicArgs = {
	input: Array<_CreateClinicInput>;
};

export type _PacketCreateManyClinicDoctorArgs = {
	input: Array<_CreateClinicDoctorInput>;
};

export type _PacketCreateManyClinicDoctorAvailabilityArgs = {
	input: Array<_CreateClinicDoctorAvailabilityInput>;
};

export type _PacketCreateManyClinicOfficeArgs = {
	input: Array<_CreateClinicOfficeInput>;
};

export type _PacketCreateManyClinicTableArgs = {
	input: Array<_CreateClinicTableInput>;
};

export type _PacketCreateManyCustomerArgs = {
	input: Array<_CreateCustomerInput>;
};

export type _PacketCreateManyDoctorArgs = {
	input: Array<_CreateDoctorInput>;
};

export type _PacketCreateManyPersonArgs = {
	input: Array<_CreatePersonInput>;
};

export type _PacketCreatePersonArgs = {
	input: _CreatePersonInput;
};

export type _PacketDeleteClinicArgs = {
	compare?: InputMaybe<_CompareClinicInput>;
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteClinicDoctorArgs = {
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteClinicDoctorAvailabilityArgs = {
	compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteClinicOfficeArgs = {
	compare?: InputMaybe<_CompareClinicOfficeInput>;
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteClinicTableArgs = {
	compare?: InputMaybe<_CompareClinicTableInput>;
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteCustomerArgs = {
	compare?: InputMaybe<_CompareCustomerInput>;
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteDoctorArgs = {
	id: Scalars["ID"]["input"];
};

export type _PacketDeleteManyClinicArgs = {
	input: Array<InputMaybe<_DeleteManyClinicInput>>;
};

export type _PacketDeleteManyClinicDoctorArgs = {
	ids: Array<Scalars["ID"]["input"]>;
};

export type _PacketDeleteManyClinicDoctorAvailabilityArgs = {
	input: Array<InputMaybe<_DeleteManyClinicDoctorAvailabilityInput>>;
};

export type _PacketDeleteManyClinicOfficeArgs = {
	input: Array<InputMaybe<_DeleteManyClinicOfficeInput>>;
};

export type _PacketDeleteManyClinicTableArgs = {
	input: Array<InputMaybe<_DeleteManyClinicTableInput>>;
};

export type _PacketDeleteManyCustomerArgs = {
	input: Array<InputMaybe<_DeleteManyCustomerInput>>;
};

export type _PacketDeleteManyDoctorArgs = {
	ids: Array<Scalars["ID"]["input"]>;
};

export type _PacketDeleteManyPersonArgs = {
	input: Array<InputMaybe<_DeleteManyPersonInput>>;
};

export type _PacketDeletePersonArgs = {
	compare?: InputMaybe<_ComparePersonInput>;
	id: Scalars["ID"]["input"];
};

export type _PacketGetClinicArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetClinicDoctorArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetClinicDoctorAvailabilityArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetClinicOfficeArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetClinicTableArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetCustomerArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetDoctorArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetDoctorTypeArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetPersonArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetStakeholderArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetStatusArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketGetStatusGraphArgs = {
	failOnEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
	id: Scalars["ID"]["input"];
	lock?: InputMaybe<_GetLockMode>;
};

export type _PacketUpdateClinicArgs = {
	compare?: InputMaybe<_CompareClinicInput>;
	input: _UpdateClinicInput;
};

export type _PacketUpdateClinicDoctorArgs = {
	input: _UpdateClinicDoctorInput;
};

export type _PacketUpdateClinicDoctorAvailabilityArgs = {
	compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
	input: _UpdateClinicDoctorAvailabilityInput;
};

export type _PacketUpdateClinicOfficeArgs = {
	compare?: InputMaybe<_CompareClinicOfficeInput>;
	input: _UpdateClinicOfficeInput;
};

export type _PacketUpdateClinicTableArgs = {
	compare?: InputMaybe<_CompareClinicTableInput>;
	input: _UpdateClinicTableInput;
};

export type _PacketUpdateCustomerArgs = {
	compare?: InputMaybe<_CompareCustomerInput>;
	input: _UpdateCustomerInput;
};

export type _PacketUpdateDoctorArgs = {
	input: _UpdateDoctorInput;
};

export type _PacketUpdateManyClinicArgs = {
	input: Array<InputMaybe<_UpdateManyClinicInput>>;
};

export type _PacketUpdateManyClinicDoctorArgs = {
	input: Array<_UpdateClinicDoctorInput>;
};

export type _PacketUpdateManyClinicDoctorAvailabilityArgs = {
	input: Array<InputMaybe<_UpdateManyClinicDoctorAvailabilityInput>>;
};

export type _PacketUpdateManyClinicOfficeArgs = {
	input: Array<InputMaybe<_UpdateManyClinicOfficeInput>>;
};

export type _PacketUpdateManyClinicTableArgs = {
	input: Array<InputMaybe<_UpdateManyClinicTableInput>>;
};

export type _PacketUpdateManyCustomerArgs = {
	input: Array<InputMaybe<_UpdateManyCustomerInput>>;
};

export type _PacketUpdateManyDoctorArgs = {
	input: Array<_UpdateDoctorInput>;
};

export type _PacketUpdateManyPersonArgs = {
	input: Array<InputMaybe<_UpdateManyPersonInput>>;
};

export type _PacketUpdatePersonArgs = {
	compare?: InputMaybe<_ComparePersonInput>;
	input: _UpdatePersonInput;
};

export type _Query = {
	__typename?: "_Query";
	merge: _MergedEntitiesCollection;
	resolveReferences: Array<_Reference>;
	searchClinic: _Ec_Clinic;
	searchClinicDoctor: _Ec_ClinicDoctor;
	searchClinicDoctorAvailability: _Ec_ClinicDoctorAvailability;
	searchClinicOffice: _Ec_ClinicOffice;
	searchClinicTable: _Ec_ClinicTable;
	searchCustomer: _Ec_Customer;
	searchDoctor: _Ec_Doctor;
	searchDoctorType: _Ec_DoctorType;
	searchPerson: _Ec_Person;
	searchRootDictionary: _Ec_RootDictionary;
	searchStakeholder: _Ec_Stakeholder;
	searchStatus: _Ec_Status;
	searchStatusGraph: _Ec_StatusGraph;
	searchSysAdminSettings: _Ec_SysAdminSettings;
	searchSysCheckSelect: _Ec_SysCheckSelect;
	searchSysOperation: _Ec_SysOperation;
	searchSysParamAddition: _Ec_SysParamAddition;
	searchSysRootSecurity: _Ec_SysRootSecurity;
	selectionByClinic: _Sec_Clinic;
	selectionByClinicDoctor: _Sec_ClinicDoctor;
	selectionByClinicDoctorAvailability: _Sec_ClinicDoctorAvailability;
	selectionByClinicOffice: _Sec_ClinicOffice;
	selectionByClinicTable: _Sec_ClinicTable;
	selectionByCustomer: _Sec_Customer;
	selectionByDoctor: _Sec_Doctor;
	selectionByDoctorType: _Sec_DoctorType;
	selectionByPerson: _Sec_Person;
	selectionByRootDictionary: _Sec_RootDictionary;
	selectionByStakeholder: _Sec_Stakeholder;
	selectionByStatus: _Sec_Status;
	selectionByStatusGraph: _Sec_StatusGraph;
	selectionBySysAdminSettings: _Sec_SysAdminSettings;
	selectionBySysCheckSelect: _Sec_SysCheckSelect;
	selectionBySysOperation: _Sec_SysOperation;
	selectionBySysParamAddition: _Sec_SysParamAddition;
	selectionBySysRootSecurity: _Sec_SysRootSecurity;
};

export type _QueryMergeArgs = {
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QueryResolveReferencesArgs = {
	ids: Array<Scalars["ID"]["input"]>;
	referenceType: Scalars["String"]["input"];
};

export type _QuerySearchClinicArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchClinicDoctorArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchClinicDoctorAvailabilityArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchClinicOfficeArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchClinicTableArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchCustomerArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchDoctorArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchDoctorTypeArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchPersonArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchRootDictionaryArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchStakeholderArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchStatusArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchStatusGraphArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchSysAdminSettingsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchSysCheckSelectArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchSysOperationArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchSysParamAdditionArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySearchSysRootSecurityArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByClinicArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByClinicDoctorArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByClinicDoctorAvailabilityArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByClinicOfficeArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByClinicTableArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByCustomerArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByDoctorArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByDoctorTypeArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByPersonArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByRootDictionaryArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByStakeholderArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByStatusArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionByStatusGraphArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionBySysAdminSettingsArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionBySysCheckSelectArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionBySysOperationArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionBySysParamAdditionArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _QuerySelectionBySysRootSecurityArgs = {
	cond?: InputMaybe<Scalars["String"]["input"]>;
	distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
	group?: InputMaybe<Array<Scalars["String"]["input"]>>;
	groupCond?: InputMaybe<Scalars["String"]["input"]>;
	limit?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _R_Clinic = _Reference & {
	__typename?: "_R_Clinic";
	entity?: Maybe<Clinic>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_ClinicDoctor = _Reference & {
	__typename?: "_R_ClinicDoctor";
	entity?: Maybe<ClinicDoctor>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_ClinicDoctorAvailability = _Reference & {
	__typename?: "_R_ClinicDoctorAvailability";
	entity?: Maybe<ClinicDoctorAvailability>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_ClinicOffice = _Reference & {
	__typename?: "_R_ClinicOffice";
	entity?: Maybe<ClinicOffice>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_ClinicTable = _Reference & {
	__typename?: "_R_ClinicTable";
	entity?: Maybe<ClinicTable>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_Customer = _Reference & {
	__typename?: "_R_Customer";
	entity?: Maybe<Customer>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_Doctor = _Reference & {
	__typename?: "_R_Doctor";
	entity?: Maybe<Doctor>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_DoctorType = _Reference & {
	__typename?: "_R_DoctorType";
	entity?: Maybe<DoctorType>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_Person = _Reference & {
	__typename?: "_R_Person";
	entity?: Maybe<Person>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_RootDictionary = _Reference & {
	__typename?: "_R_RootDictionary";
	entity?: Maybe<RootDictionary>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_Stakeholder = _Reference & {
	__typename?: "_R_Stakeholder";
	entity?: Maybe<Stakeholder>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_Status = _Reference & {
	__typename?: "_R_Status";
	entity?: Maybe<Status>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_StatusGraph = _Reference & {
	__typename?: "_R_StatusGraph";
	entity?: Maybe<StatusGraph>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_SysAdminSettings = _Reference & {
	__typename?: "_R_SysAdminSettings";
	entity?: Maybe<SysAdminSettings>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_SysCheckSelect = _Reference & {
	__typename?: "_R_SysCheckSelect";
	entity?: Maybe<SysCheckSelect>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_SysOperation = _Reference & {
	__typename?: "_R_SysOperation";
	entity?: Maybe<SysOperation>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_SysParamAddition = _Reference & {
	__typename?: "_R_SysParamAddition";
	entity?: Maybe<SysParamAddition>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _R_SysRootSecurity = _Reference & {
	__typename?: "_R_SysRootSecurity";
	entity?: Maybe<SysRootSecurity>;
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _Reference = {
	entityId?: Maybe<Scalars["String"]["output"]>;
};

export type _Sec_Clinic = {
	__typename?: "_SEC_Clinic";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_Clinic>;
};

export type _Sec_ClinicDoctor = {
	__typename?: "_SEC_ClinicDoctor";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_ClinicDoctor>;
};

export type _Sec_ClinicDoctorAvailability = {
	__typename?: "_SEC_ClinicDoctorAvailability";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_ClinicDoctorAvailability>;
};

export type _Sec_ClinicOffice = {
	__typename?: "_SEC_ClinicOffice";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_ClinicOffice>;
};

export type _Sec_ClinicTable = {
	__typename?: "_SEC_ClinicTable";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_ClinicTable>;
};

export type _Sec_Customer = {
	__typename?: "_SEC_Customer";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_Customer>;
};

export type _Sec_Doctor = {
	__typename?: "_SEC_Doctor";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_Doctor>;
};

export type _Sec_DoctorType = {
	__typename?: "_SEC_DoctorType";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_DoctorType>;
};

export type _Sec_Person = {
	__typename?: "_SEC_Person";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_Person>;
};

export type _Sec_RootDictionary = {
	__typename?: "_SEC_RootDictionary";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_RootDictionary>;
};

export type _Sec_Stakeholder = {
	__typename?: "_SEC_Stakeholder";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_Stakeholder>;
};

export type _Sec_Status = {
	__typename?: "_SEC_Status";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_Status>;
};

export type _Sec_StatusGraph = {
	__typename?: "_SEC_StatusGraph";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_StatusGraph>;
};

export type _Sec_SysAdminSettings = {
	__typename?: "_SEC_SysAdminSettings";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_SysAdminSettings>;
};

export type _Sec_SysCheckSelect = {
	__typename?: "_SEC_SysCheckSelect";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_SysCheckSelect>;
};

export type _Sec_SysOperation = {
	__typename?: "_SEC_SysOperation";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_SysOperation>;
};

export type _Sec_SysParamAddition = {
	__typename?: "_SEC_SysParamAddition";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_SysParamAddition>;
};

export type _Sec_SysRootSecurity = {
	__typename?: "_SEC_SysRootSecurity";
	count: Scalars["Int"]["output"];
	elems: Array<_Se_SysRootSecurity>;
};

export type _Se_Clinic = {
	__typename?: "_SE_Clinic";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_ClinicDoctor = {
	__typename?: "_SE_ClinicDoctor";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_ClinicDoctorAvailability = {
	__typename?: "_SE_ClinicDoctorAvailability";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	beginDate: Scalars["_DateTime"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	endDate: Scalars["_DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_ClinicOffice = {
	__typename?: "_SE_ClinicOffice";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	officeNumber?: Maybe<Scalars["String"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_ClinicTable = {
	__typename?: "_SE_ClinicTable";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	beginDate: Scalars["_DateTime"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	comment?: Maybe<Scalars["String"]["output"]>;
	endDate: Scalars["_DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_Customer = {
	__typename?: "_SE_Customer";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	insurancePolicyNumber: Scalars["String"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	phoneNumber?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_Doctor = {
	__typename?: "_SE_Doctor";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_DoctorType = {
	__typename?: "_SE_DoctorType";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	isDel: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
	type: Scalars["String"]["output"];
};

export type _Se_Person = {
	__typename?: "_SE_Person";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	birthDate?: Maybe<Scalars["_Date"]["output"]>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	firstName: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	inn?: Maybe<Scalars["String"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	lastName: Scalars["String"]["output"];
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _Se_RootDictionary = {
	__typename?: "_SE_RootDictionary";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	id: Scalars["ID"]["output"];
	type: Scalars["String"]["output"];
};

export type _Se_Stakeholder = {
	__typename?: "_SE_Stakeholder";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_Status = {
	__typename?: "_SE_Status";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	initial?: Maybe<Scalars["Boolean"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	statusType?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_StatusGraph = {
	__typename?: "_SE_StatusGraph";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	code?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	label?: Maybe<Scalars["String"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_SysAdminSettings = {
	__typename?: "_SE_SysAdminSettings";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	key?: Maybe<Scalars["String"]["output"]>;
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	value?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_SysCheckSelect = {
	__typename?: "_SE_SysCheckSelect";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	beforeCommitEnable?: Maybe<Scalars["Boolean"]["output"]>;
	beforeOperationDisable?: Maybe<Scalars["Boolean"]["output"]>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	conditionValue?: Maybe<Scalars["String"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	orderValue?: Maybe<Scalars["Int"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	typeName?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_SysOperation = {
	__typename?: "_SE_SysOperation";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	allowEmptyChecks?: Maybe<Scalars["Boolean"]["output"]>;
	body?: Maybe<Scalars["String"]["output"]>;
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	disableJwtVerification?: Maybe<Scalars["Boolean"]["output"]>;
	hashValue?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_SysParamAddition = {
	__typename?: "_SE_SysParamAddition";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	paramAddition?: Maybe<Scalars["String"]["output"]>;
	paramName?: Maybe<Scalars["String"]["output"]>;
};

export type _Se_SysRootSecurity = {
	__typename?: "_SE_SysRootSecurity";
	_calc: _Calculation;
	aggVersion: Scalars["Long"]["output"];
	chgCnt?: Maybe<Scalars["Long"]["output"]>;
	id: Scalars["ID"]["output"];
	lastChangeDate?: Maybe<Scalars["_DateTime"]["output"]>;
	ownerId?: Maybe<Scalars["String"]["output"]>;
	type: Scalars["String"]["output"];
};

export type _SingleReferenceInput = {
	entityId: Scalars["String"]["input"];
};

export type _SortCriterionSpecification = {
	crit: Scalars["String"]["input"];
	nullsLast?: InputMaybe<Scalars["Boolean"]["input"]>;
	order?: _SortOrder;
};

export enum _SortOrder {
	Asc = "ASC",
	Desc = "DESC",
}

export type _UpdateClinicDoctorAvailabilityInput = {
	beginDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
	clinicDoctor?: InputMaybe<Scalars["ID"]["input"]>;
	clinicOffice?: InputMaybe<Scalars["ID"]["input"]>;
	endDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
	id: Scalars["ID"]["input"];
};

export type _UpdateClinicDoctorInput = {
	clinic?: InputMaybe<Scalars["ID"]["input"]>;
	doctor?: InputMaybe<_SingleReferenceInput>;
	id: Scalars["ID"]["input"];
};

export type _UpdateClinicInput = {
	id: Scalars["ID"]["input"];
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type _UpdateClinicOfficeInput = {
	clinic?: InputMaybe<Scalars["ID"]["input"]>;
	id: Scalars["ID"]["input"];
	officeNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type _UpdateClinicTableInput = {
	beginDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
	clinic?: InputMaybe<Scalars["ID"]["input"]>;
	clinicDoctor?: InputMaybe<Scalars["ID"]["input"]>;
	clinicOffice?: InputMaybe<Scalars["ID"]["input"]>;
	comment?: InputMaybe<Scalars["String"]["input"]>;
	customer?: InputMaybe<_SingleReferenceInput>;
	endDate?: InputMaybe<Scalars["_DateTime"]["input"]>;
	id: Scalars["ID"]["input"];
};

export type _UpdateCustomerInput = {
	id: Scalars["ID"]["input"];
	insurancePolicyNumber?: InputMaybe<Scalars["String"]["input"]>;
	person?: InputMaybe<_SingleReferenceInput>;
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type _UpdateDoctorInput = {
	doctorType?: InputMaybe<Scalars["ID"]["input"]>;
	id: Scalars["ID"]["input"];
	person?: InputMaybe<_SingleReferenceInput>;
};

export type _UpdateManyClinicDoctorAvailabilityInput = {
	compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
	param: _UpdateClinicDoctorAvailabilityInput;
};

export type _UpdateManyClinicInput = {
	compare?: InputMaybe<_CompareClinicInput>;
	param: _UpdateClinicInput;
};

export type _UpdateManyClinicOfficeInput = {
	compare?: InputMaybe<_CompareClinicOfficeInput>;
	param: _UpdateClinicOfficeInput;
};

export type _UpdateManyClinicTableInput = {
	compare?: InputMaybe<_CompareClinicTableInput>;
	param: _UpdateClinicTableInput;
};

export type _UpdateManyCustomerInput = {
	compare?: InputMaybe<_CompareCustomerInput>;
	param: _UpdateCustomerInput;
};

export type _UpdateManyPersonInput = {
	compare?: InputMaybe<_ComparePersonInput>;
	param: _UpdatePersonInput;
};

export type _UpdateOrCreateDoctorTypeResponse = {
	__typename?: "_UpdateOrCreateDoctorTypeResponse";
	created?: Maybe<Scalars["Boolean"]["output"]>;
	returning?: Maybe<DoctorType>;
};

export type _UpdateOrCreateManyDoctorTypeInput = {
	exist?: InputMaybe<_ExistDoctorTypeInput>;
	param: _CreateDoctorTypeInput;
};

export type _UpdateOrCreateManyResponse = {
	__typename?: "_UpdateOrCreateManyResponse";
	created?: Maybe<Scalars["Boolean"]["output"]>;
	id?: Maybe<Scalars["ID"]["output"]>;
};

export type _UpdatePersonInput = {
	birthDate?: InputMaybe<Scalars["_Date"]["input"]>;
	firstName?: InputMaybe<Scalars["String"]["input"]>;
	id: Scalars["ID"]["input"];
	inn?: InputMaybe<Scalars["String"]["input"]>;
	lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type DoctorTypeAttributesFragment = {
	__typename: "_E_DoctorType";
	id: string;
	name: string;
	description?: string | null;
};

export type SearchDoctorTypeQueryVariables = Exact<{
	searchStr: Scalars["String"]["input"];
}>;

export type SearchDoctorTypeQuery = {
	__typename?: "_Query";
	searchDoctorType: {
		__typename?: "_EC_DoctorType";
		elems: Array<{ __typename: "_E_DoctorType"; id: string; name: string; description?: string | null }>;
	};
};

export type UpdateOrCreateDoctorTypeMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	name: Scalars["String"]["input"];
	description?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateOrCreateDoctorTypeMutation = {
	__typename?: "_Mutation";
	dictionaryPacket?: {
		__typename?: "_DictionaryPacket";
		updateOrCreateDoctorType?: {
			__typename?: "_UpdateOrCreateDoctorTypeResponse";
			returning?: { __typename: "_E_DoctorType"; id: string; name: string; description?: string | null } | null;
		} | null;
	} | null;
};

export type DeleteDoctorTypeMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteDoctorTypeMutation = {
	__typename?: "_Mutation";
	dictionaryPacket?: {
		__typename?: "_DictionaryPacket";
		getDoctorType?: { __typename?: "_E_DoctorType"; id: string } | null;
		updateOrCreateDoctorType?: {
			__typename?: "_UpdateOrCreateDoctorTypeResponse";
			returning?: { __typename: "_E_DoctorType"; id: string; name: string; description?: string | null } | null;
		} | null;
	} | null;
};

export type PersonAttributesFragment = {
	__typename: "_E_Person";
	id: string;
	firstName: string;
	lastName: string;
	inn?: string | null;
	birthDate?: any | null;
};

export type SearchPersonQueryVariables = Exact<{
	searchStr: Scalars["String"]["input"];
}>;

export type SearchPersonQuery = {
	__typename?: "_Query";
	searchPerson: {
		__typename?: "_EC_Person";
		elems: Array<{
			__typename: "_E_Person";
			id: string;
			firstName: string;
			lastName: string;
			inn?: string | null;
			birthDate?: any | null;
		}>;
	};
};

export type CreatePersonMutationVariables = Exact<{
	input: _CreatePersonInput;
}>;

export type CreatePersonMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createPerson?: {
			__typename: "_E_Person";
			id: string;
			firstName: string;
			lastName: string;
			inn?: string | null;
			birthDate?: any | null;
		} | null;
	} | null;
};

export type UpdatePersonMutationVariables = Exact<{
	input: _UpdatePersonInput;
}>;

export type UpdatePersonMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		updatePerson?: {
			__typename: "_E_Person";
			id: string;
			firstName: string;
			lastName: string;
			inn?: string | null;
			birthDate?: any | null;
		} | null;
	} | null;
};

export type DeletePersonMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeletePersonMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deletePerson?: string | null } | null;
};

export type DoctorAttributesFragment = {
	__typename: "_E_Doctor";
	id: string;
	doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
	person: {
		__typename?: "_G_PersonReference";
		entityId?: string | null;
		entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
	};
};

export type SearchDoctorQueryVariables = Exact<{
	searchStr: Scalars["String"]["input"];
}>;

export type SearchDoctorQuery = {
	__typename?: "_Query";
	searchDoctor: {
		__typename?: "_EC_Doctor";
		elems: Array<{
			__typename: "_E_Doctor";
			id: string;
			doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		}>;
	};
};

export type CreateDoctorMutationVariables = Exact<{
	doctorTypeId: Scalars["ID"]["input"];
	personId: Scalars["String"]["input"];
}>;

export type CreateDoctorMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createDoctor?: {
			__typename: "_E_Doctor";
			id: string;
			doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		} | null;
	} | null;
};

export type UpdateDoctorMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	doctorTypeId: Scalars["ID"]["input"];
	personId: Scalars["String"]["input"];
}>;

export type UpdateDoctorMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		updateDoctor?: {
			__typename: "_E_Doctor";
			id: string;
			doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		} | null;
	} | null;
};

export type DeleteDoctorMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteDoctorMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteDoctor?: string | null } | null;
};

export type CustomerAttributesFragment = {
	__typename: "_E_Customer";
	id: string;
	insurancePolicyNumber: string;
	phoneNumber?: string | null;
	person: {
		__typename?: "_G_PersonReference";
		entityId?: string | null;
		entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
	};
};

export type SearchCustomerQueryVariables = Exact<{
	searchStr: Scalars["String"]["input"];
}>;

export type SearchCustomerQuery = {
	__typename?: "_Query";
	searchCustomer: {
		__typename?: "_EC_Customer";
		elems: Array<{
			__typename: "_E_Customer";
			id: string;
			insurancePolicyNumber: string;
			phoneNumber?: string | null;
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		}>;
	};
};

export type CreateCustomerMutationVariables = Exact<{
	personId: Scalars["String"]["input"];
	insurancePolicyNumber: Scalars["String"]["input"];
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CreateCustomerMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createCustomer?: {
			__typename: "_E_Customer";
			id: string;
			insurancePolicyNumber: string;
			phoneNumber?: string | null;
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		} | null;
	} | null;
};

export type UpdateCustomerMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateCustomerMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		updateCustomer?: {
			__typename: "_E_Customer";
			id: string;
			insurancePolicyNumber: string;
			phoneNumber?: string | null;
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		} | null;
	} | null;
};

export type UpdateAllCustomerMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
	insurancePolicyNumber?: InputMaybe<Scalars["String"]["input"]>;
	new_person_id: Scalars["String"]["input"];
}>;

export type UpdateAllCustomerMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		updateCustomer?: {
			__typename: "_E_Customer";
			id: string;
			insurancePolicyNumber: string;
			phoneNumber?: string | null;
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		} | null;
	} | null;
};

export type DeleteCustomerMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteCustomerMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteCustomer?: string | null } | null;
};

export type ClinicAttributesFragment = { __typename: "_E_Clinic"; id: string; name?: string | null };

export type SearchClinicQueryVariables = Exact<{
	searchStr: Scalars["String"]["input"];
}>;

export type SearchClinicQuery = {
	__typename?: "_Query";
	searchClinic: {
		__typename?: "_EC_Clinic";
		elems: Array<{ __typename: "_E_Clinic"; id: string; name?: string | null }>;
	};
};

export type CreateClinicMutationVariables = Exact<{
	name: Scalars["String"]["input"];
}>;

export type CreateClinicMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createClinic?: { __typename: "_E_Clinic"; id: string; name?: string | null } | null;
	} | null;
};

export type UpdateClinicMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	name: Scalars["String"]["input"];
}>;

export type UpdateClinicMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		updateClinic?: { __typename: "_E_Clinic"; id: string; name?: string | null } | null;
	} | null;
};

export type DeleteClinicMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteClinicMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteClinic?: string | null } | null;
};

export type ClinicOfficeAttributesFragment = {
	__typename: "_E_ClinicOffice";
	id: string;
	officeNumber?: string | null;
	clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
};

export type SearchClinicOfficeQueryVariables = Exact<{
	clinicId: Scalars["String"]["input"];
	officeNumber: Scalars["String"]["input"];
}>;

export type SearchClinicOfficeQuery = {
	__typename?: "_Query";
	searchClinicOffice: {
		__typename?: "_EC_ClinicOffice";
		elems: Array<{
			__typename: "_E_ClinicOffice";
			id: string;
			officeNumber?: string | null;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
		}>;
	};
};

export type CreateClinicOfficeMutationVariables = Exact<{
	clinicId: Scalars["ID"]["input"];
	officeNumber: Scalars["String"]["input"];
}>;

export type CreateClinicOfficeMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createClinicOffice?: {
			__typename: "_E_ClinicOffice";
			id: string;
			officeNumber?: string | null;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
		} | null;
	} | null;
};

export type DeleteClinicOfficeMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteClinicOfficeMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteClinicOffice?: string | null } | null;
};

export type ClinicDoctorAttributesFragment = {
	__typename: "_E_ClinicDoctor";
	id: string;
	clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
	doctor: {
		__typename?: "_G_DoctorReference";
		entityId?: string | null;
		entity?: {
			__typename?: "_E_Doctor";
			doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Person";
					firstName: string;
					lastName: string;
					inn?: string | null;
					birthDate?: any | null;
				} | null;
			};
		} | null;
	};
};

export type SearchClinicDoctorQueryVariables = Exact<{
	clinicId: Scalars["String"]["input"];
	searchStr: Scalars["String"]["input"];
}>;

export type SearchClinicDoctorQuery = {
	__typename?: "_Query";
	searchClinicDoctor: {
		__typename?: "_EC_ClinicDoctor";
		elems: Array<{
			__typename: "_E_ClinicDoctor";
			id: string;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
			doctor: {
				__typename?: "_G_DoctorReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Doctor";
					doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: {
							__typename?: "_E_Person";
							firstName: string;
							lastName: string;
							inn?: string | null;
							birthDate?: any | null;
						} | null;
					};
				} | null;
			};
		}>;
	};
};

export type CreateClinicDoctorMutationVariables = Exact<{
	clinicId: Scalars["ID"]["input"];
	doctorId: Scalars["String"]["input"];
}>;

export type CreateClinicDoctorMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createClinicDoctor?: {
			__typename: "_E_ClinicDoctor";
			id: string;
			clinic: { __typename?: "_E_Clinic"; id: string; name?: string | null };
			doctor: {
				__typename?: "_G_DoctorReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Doctor";
					doctorType: { __typename?: "_E_DoctorType"; id: string; name: string };
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: {
							__typename?: "_E_Person";
							firstName: string;
							lastName: string;
							inn?: string | null;
							birthDate?: any | null;
						} | null;
					};
				} | null;
			};
		} | null;
	} | null;
};

export type DeleteClinicDoctorMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteClinicDoctorMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteClinicDoctor?: string | null } | null;
};

export type ClinicDoctorAvailabilityAttributesFragment = {
	__typename: "_E_ClinicDoctorAvailability";
	id: string;
	beginDate: any;
	endDate: any;
	clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
};

export type SearchClinicDoctorAvailabilityQueryVariables = Exact<{
	clinicDoctorId: Scalars["String"]["input"];
	dateFrom: Scalars["_DateTime"]["input"];
	dateTo: Scalars["_DateTime"]["input"];
}>;

export type SearchClinicDoctorAvailabilityQuery = {
	__typename?: "_Query";
	searchClinicDoctorAvailability: {
		__typename?: "_EC_ClinicDoctorAvailability";
		elems: Array<{
			__typename: "_E_ClinicDoctorAvailability";
			id: string;
			beginDate: any;
			endDate: any;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
		}>;
	};
};

export type ClinicDoctorAvailabilityAttributes1Fragment = {
	__typename: "_E_ClinicDoctorAvailability";
	id: string;
	beginDate: any;
	endDate: any;
	clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
	clinicDoctor: {
		__typename?: "_E_ClinicDoctor";
		doctor: {
			__typename?: "_G_DoctorReference";
			entity?: {
				__typename?: "_E_Doctor";
				person: {
					__typename?: "_G_PersonReference";
					entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
				};
			} | null;
		};
	};
};

export type SearchClinicDoctorWithNameAvailabilityQueryVariables = Exact<{
	clinicDoctorId: Scalars["String"]["input"];
	dateFrom: Scalars["_DateTime"]["input"];
	dateTo: Scalars["_DateTime"]["input"];
}>;

export type SearchClinicDoctorWithNameAvailabilityQuery = {
	__typename?: "_Query";
	searchClinicDoctorAvailability: {
		__typename?: "_EC_ClinicDoctorAvailability";
		elems: Array<{
			__typename: "_E_ClinicDoctorAvailability";
			id: string;
			beginDate: any;
			endDate: any;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
			clinicDoctor: {
				__typename?: "_E_ClinicDoctor";
				doctor: {
					__typename?: "_G_DoctorReference";
					entity?: {
						__typename?: "_E_Doctor";
						person: {
							__typename?: "_G_PersonReference";
							entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
						};
					} | null;
				};
			};
		}>;
	};
};

export type CreateClinicDoctorAvailabilityMutationVariables = Exact<{
	clinicDoctorId: Scalars["ID"]["input"];
	beginDate: Scalars["_DateTime"]["input"];
	endDate: Scalars["_DateTime"]["input"];
	clinicOfficeId: Scalars["ID"]["input"];
}>;

export type CreateClinicDoctorAvailabilityMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		getClinicDoctor?: { __typename?: "_E_ClinicDoctor"; id: string } | null;
		getClinicOffice?: { __typename?: "_E_ClinicOffice"; id: string } | null;
		createClinicDoctorAvailability?: {
			__typename: "_E_ClinicDoctorAvailability";
			id: string;
			beginDate: any;
			endDate: any;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
		} | null;
	} | null;
};

export type DeleteClinicDoctorAvailabilityMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteClinicDoctorAvailabilityMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteClinicDoctorAvailability?: string | null } | null;
};

export type ClinicTableAttributesFragment = {
	__typename: "_E_ClinicTable";
	id: string;
	beginDate: any;
	endDate: any;
	comment: string;
	clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
	customer: {
		__typename?: "_G_CustomerReference";
		entityId?: string | null;
		entity?: {
			__typename?: "_E_Customer";
			person: {
				__typename?: "_G_PersonReference";
				entityId?: string | null;
				entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
			};
		} | null;
	};
	clinicDoctor: {
		__typename?: "_E_ClinicDoctor";
		id: string;
		doctor: {
			__typename?: "_G_DoctorReference";
			entityId?: string | null;
			entity?: {
				__typename?: "_E_Doctor";
				person: {
					__typename?: "_G_PersonReference";
					entityId?: string | null;
					entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
				};
			} | null;
		};
	};
};

export type SearchClinicTableQueryVariables = Exact<{
	clinicId: Scalars["String"]["input"];
	dateFrom: Scalars["_DateTime"]["input"];
	dateTo: Scalars["_DateTime"]["input"];
}>;

export type SearchClinicTableQuery = {
	__typename?: "_Query";
	searchClinicTable: {
		__typename?: "_EC_ClinicTable";
		elems: Array<{
			__typename: "_E_ClinicTable";
			id: string;
			beginDate: any;
			endDate: any;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
			customer: {
				__typename?: "_G_CustomerReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Customer";
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
					};
				} | null;
			};
			clinicDoctor: {
				__typename?: "_E_ClinicDoctor";
				id: string;
				doctor: {
					__typename?: "_G_DoctorReference";
					entityId?: string | null;
					entity?: {
						__typename?: "_E_Doctor";
						person: {
							__typename?: "_G_PersonReference";
							entityId?: string | null;
							entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
						};
					} | null;
				};
			};
		}>;
	};
};

export type SearchClinicTableByCustomerQueryVariables = Exact<{
	customerId: Scalars["String"]["input"];
	dateFrom: Scalars["_DateTime"]["input"];
	dateTo: Scalars["_DateTime"]["input"];
}>;

export type SearchClinicTableByCustomerQuery = {
	__typename?: "_Query";
	searchClinicTable: {
		__typename?: "_EC_ClinicTable";
		elems: Array<{
			__typename: "_E_ClinicTable";
			id: string;
			beginDate: any;
			endDate: any;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
			customer: {
				__typename?: "_G_CustomerReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Customer";
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
					};
				} | null;
			};
			clinicDoctor: {
				__typename?: "_E_ClinicDoctor";
				id: string;
				doctor: {
					__typename?: "_G_DoctorReference";
					entityId?: string | null;
					entity?: {
						__typename?: "_E_Doctor";
						person: {
							__typename?: "_G_PersonReference";
							entityId?: string | null;
							entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
						};
					} | null;
				};
			};
		}>;
	};
};

export type CreateClinicTableMutationVariables = Exact<{
	clinicId: Scalars["ID"]["input"];
	clinicDoctorId: Scalars["ID"]["input"];
	beginDate: Scalars["_DateTime"]["input"];
	endDate: Scalars["_DateTime"]["input"];
	clinicOfficeId: Scalars["ID"]["input"];
	customerId: Scalars["String"]["input"];
}>;

export type CreateClinicTableMutation = {
	__typename?: "_Mutation";
	packet?: {
		__typename?: "_Packet";
		createClinicTable?: {
			__typename: "_E_ClinicTable";
			id: string;
			beginDate: any;
			endDate: any;
			clinicOffice: { __typename?: "_E_ClinicOffice"; id: string; officeNumber?: string | null };
			customer: {
				__typename?: "_G_CustomerReference";
				entityId?: string | null;
				entity?: {
					__typename?: "_E_Customer";
					person: {
						__typename?: "_G_PersonReference";
						entityId?: string | null;
						entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
					};
				} | null;
			};
			clinicDoctor: {
				__typename?: "_E_ClinicDoctor";
				id: string;
				doctor: {
					__typename?: "_G_DoctorReference";
					entityId?: string | null;
					entity?: {
						__typename?: "_E_Doctor";
						person: {
							__typename?: "_G_PersonReference";
							entityId?: string | null;
							entity?: { __typename?: "_E_Person"; firstName: string; lastName: string } | null;
						};
					} | null;
				};
			};
		} | null;
	} | null;
};

export type DeleteClinicTableMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteClinicTableMutation = {
	__typename?: "_Mutation";
	packet?: { __typename?: "_Packet"; deleteClinicTable?: string | null } | null;
};

export const DoctorTypeAttributesFragmentDoc = gql`
	fragment DoctorTypeAttributes on _E_DoctorType {
		id
		__typename
		name
		description
	}
`;
export const PersonAttributesFragmentDoc = gql`
	fragment PersonAttributes on _E_Person {
		id
		__typename
		firstName
		lastName
		inn
		birthDate
	}
`;
export const DoctorAttributesFragmentDoc = gql`
	fragment DoctorAttributes on _E_Doctor {
		id
		__typename
		doctorType {
			id
			name
		}
		person {
			entityId
			entity {
				firstName
				lastName
			}
		}
	}
`;
export const CustomerAttributesFragmentDoc = gql`
	fragment CustomerAttributes on _E_Customer {
		id
		__typename
		insurancePolicyNumber
		phoneNumber
		person {
			entityId
			entity {
				firstName
				lastName
			}
		}
	}
`;
export const ClinicAttributesFragmentDoc = gql`
	fragment ClinicAttributes on _E_Clinic {
		id
		__typename
		name
	}
`;
export const ClinicOfficeAttributesFragmentDoc = gql`
	fragment ClinicOfficeAttributes on _E_ClinicOffice {
		id
		__typename
		clinic {
			id
			name
		}
		officeNumber
	}
`;
export const ClinicDoctorAttributesFragmentDoc = gql`
	fragment ClinicDoctorAttributes on _E_ClinicDoctor {
		id
		__typename
		clinic {
			id
			name
		}
		doctor {
			entityId
			entity {
				doctorType {
					id
					name
				}
				person {
					entityId
					entity {
						firstName
						lastName
						inn
						birthDate
					}
				}
			}
		}
	}
`;
export const ClinicDoctorAvailabilityAttributesFragmentDoc = gql`
	fragment ClinicDoctorAvailabilityAttributes on _E_ClinicDoctorAvailability {
		id
		__typename
		beginDate
		endDate
		clinicOffice {
			id
			officeNumber
		}
	}
`;
export const ClinicDoctorAvailabilityAttributes1FragmentDoc = gql`
	fragment ClinicDoctorAvailabilityAttributes1 on _E_ClinicDoctorAvailability {
		id
		__typename
		beginDate
		endDate
		clinicOffice {
			id
			officeNumber
		}
		clinicDoctor {
			doctor {
				entity {
					person {
						entity {
							firstName
							lastName
						}
					}
				}
			}
		}
	}
`;
export const ClinicTableAttributesFragmentDoc = gql`
	fragment ClinicTableAttributes on _E_ClinicTable {
		id
		__typename
		beginDate
		endDate
    comment
		clinicOffice {
			id
			officeNumber
		}
		customer {
			entityId
			entity {
				person {
					entityId
					entity {
						firstName
						lastName
					}
				}
			}
		}
		clinicDoctor {
			id
			doctor {
				entityId
				entity {
					person {
						entityId
						entity {
							firstName
							lastName
						}
					}
				}
			}
		}
	}
`;
export const SearchDoctorTypeDocument = gql`
	query searchDoctorType($searchStr: String!) {
		searchDoctorType(cond: "(it.id + it.name).$upper $like '%' + \${searchStr}.$upper + '%' && it.isDel == false")
			@strExpr(string: $searchStr) {
			elems {
				...DoctorTypeAttributes
			}
		}
	}
	${DoctorTypeAttributesFragmentDoc}
`;

/**
 * __useSearchDoctorTypeQuery__
 *
 * To run a query within a React component, call `useSearchDoctorTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchDoctorTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchDoctorTypeQuery({
 *   variables: {
 *      searchStr: // value for 'searchStr'
 *   },
 * });
 */
export function useSearchDoctorTypeQuery(
	baseOptions: Apollo.QueryHookOptions<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables> &
		({ variables: SearchDoctorTypeQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables>(SearchDoctorTypeDocument, options);
}
export function useSearchDoctorTypeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables>(SearchDoctorTypeDocument, options);
}
export function useSearchDoctorTypeSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables>(
		SearchDoctorTypeDocument,
		options,
	);
}
export type SearchDoctorTypeQueryHookResult = ReturnType<typeof useSearchDoctorTypeQuery>;
export type SearchDoctorTypeLazyQueryHookResult = ReturnType<typeof useSearchDoctorTypeLazyQuery>;
export type SearchDoctorTypeSuspenseQueryHookResult = ReturnType<typeof useSearchDoctorTypeSuspenseQuery>;
export type SearchDoctorTypeQueryResult = Apollo.QueryResult<SearchDoctorTypeQuery, SearchDoctorTypeQueryVariables>;
export const UpdateOrCreateDoctorTypeDocument = gql`
	mutation updateOrCreateDoctorType($id: ID!, $name: String!, $description: String) {
		dictionaryPacket {
			updateOrCreateDoctorType(input: { id: $id, name: $name, description: $description, isDel: false }) {
				returning {
					...DoctorTypeAttributes
				}
			}
		}
	}
	${DoctorTypeAttributesFragmentDoc}
`;
export type UpdateOrCreateDoctorTypeMutationFn = Apollo.MutationFunction<
	UpdateOrCreateDoctorTypeMutation,
	UpdateOrCreateDoctorTypeMutationVariables
>;

/**
 * __useUpdateOrCreateDoctorTypeMutation__
 *
 * To run a mutation, you first call `useUpdateOrCreateDoctorTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrCreateDoctorTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrCreateDoctorTypeMutation, { data, loading, error }] = useUpdateOrCreateDoctorTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateOrCreateDoctorTypeMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateOrCreateDoctorTypeMutation, UpdateOrCreateDoctorTypeMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateOrCreateDoctorTypeMutation, UpdateOrCreateDoctorTypeMutationVariables>(
		UpdateOrCreateDoctorTypeDocument,
		options,
	);
}
export type UpdateOrCreateDoctorTypeMutationHookResult = ReturnType<typeof useUpdateOrCreateDoctorTypeMutation>;
export type UpdateOrCreateDoctorTypeMutationResult = Apollo.MutationResult<UpdateOrCreateDoctorTypeMutation>;
export type UpdateOrCreateDoctorTypeMutationOptions = Apollo.BaseMutationOptions<
	UpdateOrCreateDoctorTypeMutation,
	UpdateOrCreateDoctorTypeMutationVariables
>;
export const DeleteDoctorTypeDocument = gql`
	mutation deleteDoctorType($id: ID!) {
		dictionaryPacket {
			getDoctorType(id: "find: it.id == \${id}", failOnEmpty: true) {
				id
			}
			updateOrCreateDoctorType(input: { id: $id, name: "", isDel: false }, exist: { update: { isDel: true } }) {
				returning {
					...DoctorTypeAttributes
				}
			}
		}
	}
	${DoctorTypeAttributesFragmentDoc}
`;
export type DeleteDoctorTypeMutationFn = Apollo.MutationFunction<
	DeleteDoctorTypeMutation,
	DeleteDoctorTypeMutationVariables
>;

/**
 * __useDeleteDoctorTypeMutation__
 *
 * To run a mutation, you first call `useDeleteDoctorTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDoctorTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDoctorTypeMutation, { data, loading, error }] = useDeleteDoctorTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDoctorTypeMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteDoctorTypeMutation, DeleteDoctorTypeMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteDoctorTypeMutation, DeleteDoctorTypeMutationVariables>(
		DeleteDoctorTypeDocument,
		options,
	);
}
export type DeleteDoctorTypeMutationHookResult = ReturnType<typeof useDeleteDoctorTypeMutation>;
export type DeleteDoctorTypeMutationResult = Apollo.MutationResult<DeleteDoctorTypeMutation>;
export type DeleteDoctorTypeMutationOptions = Apollo.BaseMutationOptions<
	DeleteDoctorTypeMutation,
	DeleteDoctorTypeMutationVariables
>;
export const SearchPersonDocument = gql`
	query searchPerson($searchStr: String!) {
		searchPerson(cond: "(it.firstName+it.lastName).$upper $like '%' + \${searchStr}.$upper + '%'")
			@strExpr(string: $searchStr) {
			elems {
				...PersonAttributes
			}
		}
	}
	${PersonAttributesFragmentDoc}
`;

/**
 * __useSearchPersonQuery__
 *
 * To run a query within a React component, call `useSearchPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPersonQuery({
 *   variables: {
 *      searchStr: // value for 'searchStr'
 *   },
 * });
 */
export function useSearchPersonQuery(
	baseOptions: Apollo.QueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables> &
		({ variables: SearchPersonQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
}
export function useSearchPersonLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
}
export function useSearchPersonSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
}
export type SearchPersonQueryHookResult = ReturnType<typeof useSearchPersonQuery>;
export type SearchPersonLazyQueryHookResult = ReturnType<typeof useSearchPersonLazyQuery>;
export type SearchPersonSuspenseQueryHookResult = ReturnType<typeof useSearchPersonSuspenseQuery>;
export type SearchPersonQueryResult = Apollo.QueryResult<SearchPersonQuery, SearchPersonQueryVariables>;
export const CreatePersonDocument = gql`
	mutation createPerson($input: _CreatePersonInput!) {
		packet {
			createPerson(input: $input) {
				...PersonAttributes
			}
		}
	}
	${PersonAttributesFragmentDoc}
`;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePersonMutation(
	baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
}
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<
	CreatePersonMutation,
	CreatePersonMutationVariables
>;
export const UpdatePersonDocument = gql`
	mutation updatePerson($input: _UpdatePersonInput!) {
		packet {
			updatePerson(input: $input) {
				...PersonAttributes
			}
		}
	}
	${PersonAttributesFragmentDoc}
`;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePersonMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
}
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<
	UpdatePersonMutation,
	UpdatePersonMutationVariables
>;
export const DeletePersonDocument = gql`
	mutation deletePerson($id: ID!) {
		packet {
			deletePerson(id: $id)
		}
	}
`;
export type DeletePersonMutationFn = Apollo.MutationFunction<DeletePersonMutation, DeletePersonMutationVariables>;

/**
 * __useDeletePersonMutation__
 *
 * To run a mutation, you first call `useDeletePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePersonMutation, { data, loading, error }] = useDeletePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePersonMutation(
	baseOptions?: Apollo.MutationHookOptions<DeletePersonMutation, DeletePersonMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeletePersonMutation, DeletePersonMutationVariables>(DeletePersonDocument, options);
}
export type DeletePersonMutationHookResult = ReturnType<typeof useDeletePersonMutation>;
export type DeletePersonMutationResult = Apollo.MutationResult<DeletePersonMutation>;
export type DeletePersonMutationOptions = Apollo.BaseMutationOptions<
	DeletePersonMutation,
	DeletePersonMutationVariables
>;
export const SearchDoctorDocument = gql`
	query searchDoctor($searchStr: String!) {
		searchDoctor(
			cond: "(it.person.entity.firstName+it.person.entity.lastName).$upper $like '%' + \${searchStr}.$upper + '%'"
		) @strExpr(string: $searchStr) {
			elems {
				...DoctorAttributes
			}
		}
	}
	${DoctorAttributesFragmentDoc}
`;

/**
 * __useSearchDoctorQuery__
 *
 * To run a query within a React component, call `useSearchDoctorQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchDoctorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchDoctorQuery({
 *   variables: {
 *      searchStr: // value for 'searchStr'
 *   },
 * });
 */
export function useSearchDoctorQuery(
	baseOptions: Apollo.QueryHookOptions<SearchDoctorQuery, SearchDoctorQueryVariables> &
		({ variables: SearchDoctorQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchDoctorQuery, SearchDoctorQueryVariables>(SearchDoctorDocument, options);
}
export function useSearchDoctorLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchDoctorQuery, SearchDoctorQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchDoctorQuery, SearchDoctorQueryVariables>(SearchDoctorDocument, options);
}
export function useSearchDoctorSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchDoctorQuery, SearchDoctorQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchDoctorQuery, SearchDoctorQueryVariables>(SearchDoctorDocument, options);
}
export type SearchDoctorQueryHookResult = ReturnType<typeof useSearchDoctorQuery>;
export type SearchDoctorLazyQueryHookResult = ReturnType<typeof useSearchDoctorLazyQuery>;
export type SearchDoctorSuspenseQueryHookResult = ReturnType<typeof useSearchDoctorSuspenseQuery>;
export type SearchDoctorQueryResult = Apollo.QueryResult<SearchDoctorQuery, SearchDoctorQueryVariables>;
export const CreateDoctorDocument = gql`
	mutation createDoctor($doctorTypeId: ID!, $personId: String!) {
		packet {
			createDoctor(input: { doctorType: $doctorTypeId, person: { entityId: $personId } }) {
				...DoctorAttributes
			}
		}
	}
	${DoctorAttributesFragmentDoc}
`;
export type CreateDoctorMutationFn = Apollo.MutationFunction<CreateDoctorMutation, CreateDoctorMutationVariables>;

/**
 * __useCreateDoctorMutation__
 *
 * To run a mutation, you first call `useCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorMutation, { data, loading, error }] = useCreateDoctorMutation({
 *   variables: {
 *      doctorTypeId: // value for 'doctorTypeId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useCreateDoctorMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateDoctorMutation, CreateDoctorMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateDoctorMutation, CreateDoctorMutationVariables>(CreateDoctorDocument, options);
}
export type CreateDoctorMutationHookResult = ReturnType<typeof useCreateDoctorMutation>;
export type CreateDoctorMutationResult = Apollo.MutationResult<CreateDoctorMutation>;
export type CreateDoctorMutationOptions = Apollo.BaseMutationOptions<
	CreateDoctorMutation,
	CreateDoctorMutationVariables
>;
export const UpdateDoctorDocument = gql`
	mutation updateDoctor($id: ID!, $doctorTypeId: ID!, $personId: String!) {
		packet {
			updateDoctor(input: { id: $id, doctorType: $doctorTypeId, person: { entityId: $personId } }) {
				...DoctorAttributes
			}
		}
	}
	${DoctorAttributesFragmentDoc}
`;
export type UpdateDoctorMutationFn = Apollo.MutationFunction<UpdateDoctorMutation, UpdateDoctorMutationVariables>;

/**
 * __useUpdateDoctorMutation__
 *
 * To run a mutation, you first call `useUpdateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDoctorMutation, { data, loading, error }] = useUpdateDoctorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      doctorTypeId: // value for 'doctorTypeId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useUpdateDoctorMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateDoctorMutation, UpdateDoctorMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateDoctorMutation, UpdateDoctorMutationVariables>(UpdateDoctorDocument, options);
}
export type UpdateDoctorMutationHookResult = ReturnType<typeof useUpdateDoctorMutation>;
export type UpdateDoctorMutationResult = Apollo.MutationResult<UpdateDoctorMutation>;
export type UpdateDoctorMutationOptions = Apollo.BaseMutationOptions<
	UpdateDoctorMutation,
	UpdateDoctorMutationVariables
>;
export const DeleteDoctorDocument = gql`
	mutation deleteDoctor($id: ID!) {
		packet {
			deleteDoctor(id: $id)
		}
	}
`;
export type DeleteDoctorMutationFn = Apollo.MutationFunction<DeleteDoctorMutation, DeleteDoctorMutationVariables>;

/**
 * __useDeleteDoctorMutation__
 *
 * To run a mutation, you first call `useDeleteDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDoctorMutation, { data, loading, error }] = useDeleteDoctorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDoctorMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteDoctorMutation, DeleteDoctorMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteDoctorMutation, DeleteDoctorMutationVariables>(DeleteDoctorDocument, options);
}
export type DeleteDoctorMutationHookResult = ReturnType<typeof useDeleteDoctorMutation>;
export type DeleteDoctorMutationResult = Apollo.MutationResult<DeleteDoctorMutation>;
export type DeleteDoctorMutationOptions = Apollo.BaseMutationOptions<
	DeleteDoctorMutation,
	DeleteDoctorMutationVariables
>;
export const SearchCustomerDocument = gql`
	query searchCustomer($searchStr: String!) {
		searchCustomer(
			cond: "(it.person.entity.firstName+it.person.entity.lastName).$upper $like '%' + \${searchStr}.$upper + '%'"
		) @strExpr(string: $searchStr) {
			elems {
				...CustomerAttributes
			}
		}
	}
	${CustomerAttributesFragmentDoc}
`;

/**
 * __useSearchCustomerQuery__
 *
 * To run a query within a React component, call `useSearchCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCustomerQuery({
 *   variables: {
 *      searchStr: // value for 'searchStr'
 *   },
 * });
 */
export function useSearchCustomerQuery(
	baseOptions: Apollo.QueryHookOptions<SearchCustomerQuery, SearchCustomerQueryVariables> &
		({ variables: SearchCustomerQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchCustomerQuery, SearchCustomerQueryVariables>(SearchCustomerDocument, options);
}
export function useSearchCustomerLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchCustomerQuery, SearchCustomerQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchCustomerQuery, SearchCustomerQueryVariables>(SearchCustomerDocument, options);
}
export function useSearchCustomerSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchCustomerQuery, SearchCustomerQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchCustomerQuery, SearchCustomerQueryVariables>(SearchCustomerDocument, options);
}
export type SearchCustomerQueryHookResult = ReturnType<typeof useSearchCustomerQuery>;
export type SearchCustomerLazyQueryHookResult = ReturnType<typeof useSearchCustomerLazyQuery>;
export type SearchCustomerSuspenseQueryHookResult = ReturnType<typeof useSearchCustomerSuspenseQuery>;
export type SearchCustomerQueryResult = Apollo.QueryResult<SearchCustomerQuery, SearchCustomerQueryVariables>;
export const CreateCustomerDocument = gql`
	mutation createCustomer($personId: String!, $insurancePolicyNumber: String!, $phoneNumber: String) {
		packet {
			createCustomer(
				input: {
					person: { entityId: $personId }
					insurancePolicyNumber: $insurancePolicyNumber
					phoneNumber: $phoneNumber
				}
			) {
				...CustomerAttributes
			}
		}
	}
	${CustomerAttributesFragmentDoc}
`;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      personId: // value for 'personId'
 *      insurancePolicyNumber: // value for 'insurancePolicyNumber'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useCreateCustomerMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
}
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<
	CreateCustomerMutation,
	CreateCustomerMutationVariables
>;
export const UpdateCustomerDocument = gql`
	mutation updateCustomer($id: ID!, $phoneNumber: String) {
		packet {
			updateCustomer(input: { id: $id, phoneNumber: $phoneNumber }) {
				...CustomerAttributes
			}
		}
	}
	${CustomerAttributesFragmentDoc}
`;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useUpdateCustomerMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, options);
}
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<
	UpdateCustomerMutation,
	UpdateCustomerMutationVariables
>;
export const UpdateAllCustomerDocument = gql`
	mutation updateAllCustomer($id: ID!, $phoneNumber: String, $insurancePolicyNumber: String, $new_person_id: String!) {
		packet {
			updateCustomer(
				input: {
					id: $id
					phoneNumber: $phoneNumber
					insurancePolicyNumber: $insurancePolicyNumber
					person: { entityId: $new_person_id }
				}
			) {
				...CustomerAttributes
			}
		}
	}
	${CustomerAttributesFragmentDoc}
`;
export type UpdateAllCustomerMutationFn = Apollo.MutationFunction<
	UpdateAllCustomerMutation,
	UpdateAllCustomerMutationVariables
>;

/**
 * __useUpdateAllCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateAllCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAllCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAllCustomerMutation, { data, loading, error }] = useUpdateAllCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      phoneNumber: // value for 'phoneNumber'
 *      insurancePolicyNumber: // value for 'insurancePolicyNumber'
 *      new_person_id: // value for 'new_person_id'
 *   },
 * });
 */
export function useUpdateAllCustomerMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateAllCustomerMutation, UpdateAllCustomerMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateAllCustomerMutation, UpdateAllCustomerMutationVariables>(
		UpdateAllCustomerDocument,
		options,
	);
}
export type UpdateAllCustomerMutationHookResult = ReturnType<typeof useUpdateAllCustomerMutation>;
export type UpdateAllCustomerMutationResult = Apollo.MutationResult<UpdateAllCustomerMutation>;
export type UpdateAllCustomerMutationOptions = Apollo.BaseMutationOptions<
	UpdateAllCustomerMutation,
	UpdateAllCustomerMutationVariables
>;
export const DeleteCustomerDocument = gql`
	mutation deleteCustomer($id: ID!) {
		packet {
			deleteCustomer(id: $id)
		}
	}
`;
export type DeleteCustomerMutationFn = Apollo.MutationFunction<DeleteCustomerMutation, DeleteCustomerMutationVariables>;

/**
 * __useDeleteCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerMutation, { data, loading, error }] = useDeleteCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, options);
}
export type DeleteCustomerMutationHookResult = ReturnType<typeof useDeleteCustomerMutation>;
export type DeleteCustomerMutationResult = Apollo.MutationResult<DeleteCustomerMutation>;
export type DeleteCustomerMutationOptions = Apollo.BaseMutationOptions<
	DeleteCustomerMutation,
	DeleteCustomerMutationVariables
>;
export const SearchClinicDocument = gql`
	query searchClinic($searchStr: String!) {
		searchClinic(cond: "(it.name).$upper $like '%' + \${searchStr}.$upper + '%'") @strExpr(string: $searchStr) {
			elems {
				...ClinicAttributes
			}
		}
	}
	${ClinicAttributesFragmentDoc}
`;

/**
 * __useSearchClinicQuery__
 *
 * To run a query within a React component, call `useSearchClinicQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicQuery({
 *   variables: {
 *      searchStr: // value for 'searchStr'
 *   },
 * });
 */
export function useSearchClinicQuery(
	baseOptions: Apollo.QueryHookOptions<SearchClinicQuery, SearchClinicQueryVariables> &
		({ variables: SearchClinicQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchClinicQuery, SearchClinicQueryVariables>(SearchClinicDocument, options);
}
export function useSearchClinicLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchClinicQuery, SearchClinicQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchClinicQuery, SearchClinicQueryVariables>(SearchClinicDocument, options);
}
export function useSearchClinicSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchClinicQuery, SearchClinicQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchClinicQuery, SearchClinicQueryVariables>(SearchClinicDocument, options);
}
export type SearchClinicQueryHookResult = ReturnType<typeof useSearchClinicQuery>;
export type SearchClinicLazyQueryHookResult = ReturnType<typeof useSearchClinicLazyQuery>;
export type SearchClinicSuspenseQueryHookResult = ReturnType<typeof useSearchClinicSuspenseQuery>;
export type SearchClinicQueryResult = Apollo.QueryResult<SearchClinicQuery, SearchClinicQueryVariables>;
export const CreateClinicDocument = gql`
	mutation createClinic($name: String!) {
		packet {
			createClinic(input: { name: $name }) {
				...ClinicAttributes
			}
		}
	}
	${ClinicAttributesFragmentDoc}
`;
export type CreateClinicMutationFn = Apollo.MutationFunction<CreateClinicMutation, CreateClinicMutationVariables>;

/**
 * __useCreateClinicMutation__
 *
 * To run a mutation, you first call `useCreateClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClinicMutation, { data, loading, error }] = useCreateClinicMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateClinicMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateClinicMutation, CreateClinicMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateClinicMutation, CreateClinicMutationVariables>(CreateClinicDocument, options);
}
export type CreateClinicMutationHookResult = ReturnType<typeof useCreateClinicMutation>;
export type CreateClinicMutationResult = Apollo.MutationResult<CreateClinicMutation>;
export type CreateClinicMutationOptions = Apollo.BaseMutationOptions<
	CreateClinicMutation,
	CreateClinicMutationVariables
>;
export const UpdateClinicDocument = gql`
	mutation updateClinic($id: ID!, $name: String!) {
		packet {
			updateClinic(input: { id: $id, name: $name }) {
				...ClinicAttributes
			}
		}
	}
	${ClinicAttributesFragmentDoc}
`;
export type UpdateClinicMutationFn = Apollo.MutationFunction<UpdateClinicMutation, UpdateClinicMutationVariables>;

/**
 * __useUpdateClinicMutation__
 *
 * To run a mutation, you first call `useUpdateClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClinicMutation, { data, loading, error }] = useUpdateClinicMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateClinicMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateClinicMutation, UpdateClinicMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateClinicMutation, UpdateClinicMutationVariables>(UpdateClinicDocument, options);
}
export type UpdateClinicMutationHookResult = ReturnType<typeof useUpdateClinicMutation>;
export type UpdateClinicMutationResult = Apollo.MutationResult<UpdateClinicMutation>;
export type UpdateClinicMutationOptions = Apollo.BaseMutationOptions<
	UpdateClinicMutation,
	UpdateClinicMutationVariables
>;
export const DeleteClinicDocument = gql`
	mutation deleteClinic($id: ID!) {
		packet {
			deleteClinic(id: $id)
		}
	}
`;
export type DeleteClinicMutationFn = Apollo.MutationFunction<DeleteClinicMutation, DeleteClinicMutationVariables>;

/**
 * __useDeleteClinicMutation__
 *
 * To run a mutation, you first call `useDeleteClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClinicMutation, { data, loading, error }] = useDeleteClinicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClinicMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteClinicMutation, DeleteClinicMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteClinicMutation, DeleteClinicMutationVariables>(DeleteClinicDocument, options);
}
export type DeleteClinicMutationHookResult = ReturnType<typeof useDeleteClinicMutation>;
export type DeleteClinicMutationResult = Apollo.MutationResult<DeleteClinicMutation>;
export type DeleteClinicMutationOptions = Apollo.BaseMutationOptions<
	DeleteClinicMutation,
	DeleteClinicMutationVariables
>;
export const SearchClinicOfficeDocument = gql`
	query searchClinicOffice($clinicId: String!, $officeNumber: String!) {
		searchClinicOffice(
			cond: "it.clinic.id == \${clinicId} && it.officeNumber.$upper $like '%' + \${officeNumber}.$upper + '%'"
		) @strExpr(strings: [$clinicId, $officeNumber]) {
			elems {
				...ClinicOfficeAttributes
			}
		}
	}
	${ClinicOfficeAttributesFragmentDoc}
`;

/**
 * __useSearchClinicOfficeQuery__
 *
 * To run a query within a React component, call `useSearchClinicOfficeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicOfficeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicOfficeQuery({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      officeNumber: // value for 'officeNumber'
 *   },
 * });
 */
export function useSearchClinicOfficeQuery(
	baseOptions: Apollo.QueryHookOptions<SearchClinicOfficeQuery, SearchClinicOfficeQueryVariables> &
		({ variables: SearchClinicOfficeQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchClinicOfficeQuery, SearchClinicOfficeQueryVariables>(
		SearchClinicOfficeDocument,
		options,
	);
}
export function useSearchClinicOfficeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchClinicOfficeQuery, SearchClinicOfficeQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchClinicOfficeQuery, SearchClinicOfficeQueryVariables>(
		SearchClinicOfficeDocument,
		options,
	);
}
export function useSearchClinicOfficeSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<SearchClinicOfficeQuery, SearchClinicOfficeQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchClinicOfficeQuery, SearchClinicOfficeQueryVariables>(
		SearchClinicOfficeDocument,
		options,
	);
}
export type SearchClinicOfficeQueryHookResult = ReturnType<typeof useSearchClinicOfficeQuery>;
export type SearchClinicOfficeLazyQueryHookResult = ReturnType<typeof useSearchClinicOfficeLazyQuery>;
export type SearchClinicOfficeSuspenseQueryHookResult = ReturnType<typeof useSearchClinicOfficeSuspenseQuery>;
export type SearchClinicOfficeQueryResult = Apollo.QueryResult<
	SearchClinicOfficeQuery,
	SearchClinicOfficeQueryVariables
>;
export const CreateClinicOfficeDocument = gql`
	mutation createClinicOffice($clinicId: ID!, $officeNumber: String!) {
		packet {
			createClinicOffice(input: { clinic: $clinicId, officeNumber: $officeNumber }) {
				...ClinicOfficeAttributes
			}
		}
	}
	${ClinicOfficeAttributesFragmentDoc}
`;
export type CreateClinicOfficeMutationFn = Apollo.MutationFunction<
	CreateClinicOfficeMutation,
	CreateClinicOfficeMutationVariables
>;

/**
 * __useCreateClinicOfficeMutation__
 *
 * To run a mutation, you first call `useCreateClinicOfficeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClinicOfficeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClinicOfficeMutation, { data, loading, error }] = useCreateClinicOfficeMutation({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      officeNumber: // value for 'officeNumber'
 *   },
 * });
 */
export function useCreateClinicOfficeMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateClinicOfficeMutation, CreateClinicOfficeMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateClinicOfficeMutation, CreateClinicOfficeMutationVariables>(
		CreateClinicOfficeDocument,
		options,
	);
}
export type CreateClinicOfficeMutationHookResult = ReturnType<typeof useCreateClinicOfficeMutation>;
export type CreateClinicOfficeMutationResult = Apollo.MutationResult<CreateClinicOfficeMutation>;
export type CreateClinicOfficeMutationOptions = Apollo.BaseMutationOptions<
	CreateClinicOfficeMutation,
	CreateClinicOfficeMutationVariables
>;
export const DeleteClinicOfficeDocument = gql`
	mutation deleteClinicOffice($id: ID!) {
		packet {
			deleteClinicOffice(id: $id)
		}
	}
`;
export type DeleteClinicOfficeMutationFn = Apollo.MutationFunction<
	DeleteClinicOfficeMutation,
	DeleteClinicOfficeMutationVariables
>;

/**
 * __useDeleteClinicOfficeMutation__
 *
 * To run a mutation, you first call `useDeleteClinicOfficeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClinicOfficeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClinicOfficeMutation, { data, loading, error }] = useDeleteClinicOfficeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClinicOfficeMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteClinicOfficeMutation, DeleteClinicOfficeMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteClinicOfficeMutation, DeleteClinicOfficeMutationVariables>(
		DeleteClinicOfficeDocument,
		options,
	);
}
export type DeleteClinicOfficeMutationHookResult = ReturnType<typeof useDeleteClinicOfficeMutation>;
export type DeleteClinicOfficeMutationResult = Apollo.MutationResult<DeleteClinicOfficeMutation>;
export type DeleteClinicOfficeMutationOptions = Apollo.BaseMutationOptions<
	DeleteClinicOfficeMutation,
	DeleteClinicOfficeMutationVariables
>;
export const SearchClinicDoctorDocument = gql`
	query searchClinicDoctor($clinicId: String!, $searchStr: String!) {
		searchClinicDoctor(
			cond: "it.clinic.id == \${clinicId} && (it.doctor.entity.person.entity.firstName+it.doctor.entity.person.entity.lastName).$upper $like '%' + \${searchStr}.$upper + '%'"
		) @strExpr(strings: [$clinicId, $searchStr]) {
			elems {
				...ClinicDoctorAttributes
			}
		}
	}
	${ClinicDoctorAttributesFragmentDoc}
`;

/**
 * __useSearchClinicDoctorQuery__
 *
 * To run a query within a React component, call `useSearchClinicDoctorQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicDoctorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicDoctorQuery({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      searchStr: // value for 'searchStr'
 *   },
 * });
 */
export function useSearchClinicDoctorQuery(
	baseOptions: Apollo.QueryHookOptions<SearchClinicDoctorQuery, SearchClinicDoctorQueryVariables> &
		({ variables: SearchClinicDoctorQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchClinicDoctorQuery, SearchClinicDoctorQueryVariables>(
		SearchClinicDoctorDocument,
		options,
	);
}
export function useSearchClinicDoctorLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchClinicDoctorQuery, SearchClinicDoctorQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchClinicDoctorQuery, SearchClinicDoctorQueryVariables>(
		SearchClinicDoctorDocument,
		options,
	);
}
export function useSearchClinicDoctorSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<SearchClinicDoctorQuery, SearchClinicDoctorQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchClinicDoctorQuery, SearchClinicDoctorQueryVariables>(
		SearchClinicDoctorDocument,
		options,
	);
}
export type SearchClinicDoctorQueryHookResult = ReturnType<typeof useSearchClinicDoctorQuery>;
export type SearchClinicDoctorLazyQueryHookResult = ReturnType<typeof useSearchClinicDoctorLazyQuery>;
export type SearchClinicDoctorSuspenseQueryHookResult = ReturnType<typeof useSearchClinicDoctorSuspenseQuery>;
export type SearchClinicDoctorQueryResult = Apollo.QueryResult<
	SearchClinicDoctorQuery,
	SearchClinicDoctorQueryVariables
>;
export const CreateClinicDoctorDocument = gql`
	mutation createClinicDoctor($clinicId: ID!, $doctorId: String!) {
		packet {
			createClinicDoctor(input: { clinic: $clinicId, doctor: { entityId: $doctorId } }) {
				...ClinicDoctorAttributes
			}
		}
	}
	${ClinicDoctorAttributesFragmentDoc}
`;
export type CreateClinicDoctorMutationFn = Apollo.MutationFunction<
	CreateClinicDoctorMutation,
	CreateClinicDoctorMutationVariables
>;

/**
 * __useCreateClinicDoctorMutation__
 *
 * To run a mutation, you first call `useCreateClinicDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClinicDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClinicDoctorMutation, { data, loading, error }] = useCreateClinicDoctorMutation({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      doctorId: // value for 'doctorId'
 *   },
 * });
 */
export function useCreateClinicDoctorMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateClinicDoctorMutation, CreateClinicDoctorMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateClinicDoctorMutation, CreateClinicDoctorMutationVariables>(
		CreateClinicDoctorDocument,
		options,
	);
}
export type CreateClinicDoctorMutationHookResult = ReturnType<typeof useCreateClinicDoctorMutation>;
export type CreateClinicDoctorMutationResult = Apollo.MutationResult<CreateClinicDoctorMutation>;
export type CreateClinicDoctorMutationOptions = Apollo.BaseMutationOptions<
	CreateClinicDoctorMutation,
	CreateClinicDoctorMutationVariables
>;
export const DeleteClinicDoctorDocument = gql`
	mutation deleteClinicDoctor($id: ID!) {
		packet {
			deleteClinicDoctor(id: $id)
		}
	}
`;
export type DeleteClinicDoctorMutationFn = Apollo.MutationFunction<
	DeleteClinicDoctorMutation,
	DeleteClinicDoctorMutationVariables
>;

/**
 * __useDeleteClinicDoctorMutation__
 *
 * To run a mutation, you first call `useDeleteClinicDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClinicDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClinicDoctorMutation, { data, loading, error }] = useDeleteClinicDoctorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClinicDoctorMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteClinicDoctorMutation, DeleteClinicDoctorMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteClinicDoctorMutation, DeleteClinicDoctorMutationVariables>(
		DeleteClinicDoctorDocument,
		options,
	);
}
export type DeleteClinicDoctorMutationHookResult = ReturnType<typeof useDeleteClinicDoctorMutation>;
export type DeleteClinicDoctorMutationResult = Apollo.MutationResult<DeleteClinicDoctorMutation>;
export type DeleteClinicDoctorMutationOptions = Apollo.BaseMutationOptions<
	DeleteClinicDoctorMutation,
	DeleteClinicDoctorMutationVariables
>;
export const SearchClinicDoctorAvailabilityDocument = gql`
	query searchClinicDoctorAvailability($clinicDoctorId: String!, $dateFrom: _DateTime!, $dateTo: _DateTime!) {
		searchClinicDoctorAvailability(
			cond: "it.clinicDoctor.id == \${clinicDoctorId} && it.endDate >= \${dateFrom} && it.beginDate <= \${dateTo}"
		) @strExpr(string: $clinicDoctorId, dateTimes: [$dateFrom, $dateTo]) {
			elems {
				...ClinicDoctorAvailabilityAttributes
			}
		}
	}
	${ClinicDoctorAvailabilityAttributesFragmentDoc}
`;

/**
 * __useSearchClinicDoctorAvailabilityQuery__
 *
 * To run a query within a React component, call `useSearchClinicDoctorAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicDoctorAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicDoctorAvailabilityQuery({
 *   variables: {
 *      clinicDoctorId: // value for 'clinicDoctorId'
 *      dateFrom: // value for 'dateFrom'
 *      dateTo: // value for 'dateTo'
 *   },
 * });
 */
export function useSearchClinicDoctorAvailabilityQuery(
	baseOptions: Apollo.QueryHookOptions<
		SearchClinicDoctorAvailabilityQuery,
		SearchClinicDoctorAvailabilityQueryVariables
	> &
		({ variables: SearchClinicDoctorAvailabilityQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchClinicDoctorAvailabilityQuery, SearchClinicDoctorAvailabilityQueryVariables>(
		SearchClinicDoctorAvailabilityDocument,
		options,
	);
}
export function useSearchClinicDoctorAvailabilityLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SearchClinicDoctorAvailabilityQuery,
		SearchClinicDoctorAvailabilityQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchClinicDoctorAvailabilityQuery, SearchClinicDoctorAvailabilityQueryVariables>(
		SearchClinicDoctorAvailabilityDocument,
		options,
	);
}
export function useSearchClinicDoctorAvailabilitySuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<
				SearchClinicDoctorAvailabilityQuery,
				SearchClinicDoctorAvailabilityQueryVariables
		  >,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchClinicDoctorAvailabilityQuery, SearchClinicDoctorAvailabilityQueryVariables>(
		SearchClinicDoctorAvailabilityDocument,
		options,
	);
}
export type SearchClinicDoctorAvailabilityQueryHookResult = ReturnType<typeof useSearchClinicDoctorAvailabilityQuery>;
export type SearchClinicDoctorAvailabilityLazyQueryHookResult = ReturnType<
	typeof useSearchClinicDoctorAvailabilityLazyQuery
>;
export type SearchClinicDoctorAvailabilitySuspenseQueryHookResult = ReturnType<
	typeof useSearchClinicDoctorAvailabilitySuspenseQuery
>;
export type SearchClinicDoctorAvailabilityQueryResult = Apollo.QueryResult<
	SearchClinicDoctorAvailabilityQuery,
	SearchClinicDoctorAvailabilityQueryVariables
>;
export const SearchClinicDoctorWithNameAvailabilityDocument = gql`
	query searchClinicDoctorWithNameAvailability($clinicDoctorId: String!, $dateFrom: _DateTime!, $dateTo: _DateTime!) {
		searchClinicDoctorAvailability(
			cond: "it.clinicDoctor.id == \${clinicDoctorId} && it.endDate >= \${dateFrom} && it.beginDate <= \${dateTo}"
		) @strExpr(string: $clinicDoctorId, dateTimes: [$dateFrom, $dateTo]) {
			elems {
				...ClinicDoctorAvailabilityAttributes1
			}
		}
	}
	${ClinicDoctorAvailabilityAttributes1FragmentDoc}
`;

/**
 * __useSearchClinicDoctorWithNameAvailabilityQuery__
 *
 * To run a query within a React component, call `useSearchClinicDoctorWithNameAvailabilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicDoctorWithNameAvailabilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicDoctorWithNameAvailabilityQuery({
 *   variables: {
 *      clinicDoctorId: // value for 'clinicDoctorId'
 *      dateFrom: // value for 'dateFrom'
 *      dateTo: // value for 'dateTo'
 *   },
 * });
 */
export function useSearchClinicDoctorWithNameAvailabilityQuery(
	baseOptions: Apollo.QueryHookOptions<
		SearchClinicDoctorWithNameAvailabilityQuery,
		SearchClinicDoctorWithNameAvailabilityQueryVariables
	> &
		({ variables: SearchClinicDoctorWithNameAvailabilityQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		SearchClinicDoctorWithNameAvailabilityQuery,
		SearchClinicDoctorWithNameAvailabilityQueryVariables
	>(SearchClinicDoctorWithNameAvailabilityDocument, options);
}
export function useSearchClinicDoctorWithNameAvailabilityLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SearchClinicDoctorWithNameAvailabilityQuery,
		SearchClinicDoctorWithNameAvailabilityQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		SearchClinicDoctorWithNameAvailabilityQuery,
		SearchClinicDoctorWithNameAvailabilityQueryVariables
	>(SearchClinicDoctorWithNameAvailabilityDocument, options);
}
export function useSearchClinicDoctorWithNameAvailabilitySuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<
				SearchClinicDoctorWithNameAvailabilityQuery,
				SearchClinicDoctorWithNameAvailabilityQueryVariables
		  >,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<
		SearchClinicDoctorWithNameAvailabilityQuery,
		SearchClinicDoctorWithNameAvailabilityQueryVariables
	>(SearchClinicDoctorWithNameAvailabilityDocument, options);
}
export type SearchClinicDoctorWithNameAvailabilityQueryHookResult = ReturnType<
	typeof useSearchClinicDoctorWithNameAvailabilityQuery
>;
export type SearchClinicDoctorWithNameAvailabilityLazyQueryHookResult = ReturnType<
	typeof useSearchClinicDoctorWithNameAvailabilityLazyQuery
>;
export type SearchClinicDoctorWithNameAvailabilitySuspenseQueryHookResult = ReturnType<
	typeof useSearchClinicDoctorWithNameAvailabilitySuspenseQuery
>;
export type SearchClinicDoctorWithNameAvailabilityQueryResult = Apollo.QueryResult<
	SearchClinicDoctorWithNameAvailabilityQuery,
	SearchClinicDoctorWithNameAvailabilityQueryVariables
>;
export const CreateClinicDoctorAvailabilityDocument = gql`
	mutation createClinicDoctorAvailability(
		$clinicDoctorId: ID!
		$beginDate: _DateTime!
		$endDate: _DateTime!
		$clinicOfficeId: ID!
	) {
		packet {
			getClinicDoctor(
				id: "find: it.id == \${clinicDoctorId} && \${beginDate} < \${endDate} && !it.clinicDoctorAvailabilityList{cond = it.endDate >= \${beginDate} && it.beginDate<=\${endDate}}.$exists"
				failOnEmpty: true
				lock: WAIT
			) {
				id
			}
			getClinicOffice(
				id: "find: it.id == \${clinicOfficeId} && !entities{type = ClinicDoctorAvailability, cond = it.clinicOffice.id == \${clinicOfficeId} && it.endDate >= \${beginDate} && it.beginDate<=\${endDate}}.$exists"
				failOnEmpty: true
				lock: WAIT
			) {
				id
			}
			createClinicDoctorAvailability(
				input: {
					clinicDoctor: $clinicDoctorId
					clinicOffice: $clinicOfficeId
					beginDate: $beginDate
					endDate: $endDate
				}
			) {
				...ClinicDoctorAvailabilityAttributes
			}
		}
	}
	${ClinicDoctorAvailabilityAttributesFragmentDoc}
`;
export type CreateClinicDoctorAvailabilityMutationFn = Apollo.MutationFunction<
	CreateClinicDoctorAvailabilityMutation,
	CreateClinicDoctorAvailabilityMutationVariables
>;

/**
 * __useCreateClinicDoctorAvailabilityMutation__
 *
 * To run a mutation, you first call `useCreateClinicDoctorAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClinicDoctorAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClinicDoctorAvailabilityMutation, { data, loading, error }] = useCreateClinicDoctorAvailabilityMutation({
 *   variables: {
 *      clinicDoctorId: // value for 'clinicDoctorId'
 *      beginDate: // value for 'beginDate'
 *      endDate: // value for 'endDate'
 *      clinicOfficeId: // value for 'clinicOfficeId'
 *   },
 * });
 */
export function useCreateClinicDoctorAvailabilityMutation(
	baseOptions?: Apollo.MutationHookOptions<
		CreateClinicDoctorAvailabilityMutation,
		CreateClinicDoctorAvailabilityMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateClinicDoctorAvailabilityMutation, CreateClinicDoctorAvailabilityMutationVariables>(
		CreateClinicDoctorAvailabilityDocument,
		options,
	);
}
export type CreateClinicDoctorAvailabilityMutationHookResult = ReturnType<
	typeof useCreateClinicDoctorAvailabilityMutation
>;
export type CreateClinicDoctorAvailabilityMutationResult =
	Apollo.MutationResult<CreateClinicDoctorAvailabilityMutation>;
export type CreateClinicDoctorAvailabilityMutationOptions = Apollo.BaseMutationOptions<
	CreateClinicDoctorAvailabilityMutation,
	CreateClinicDoctorAvailabilityMutationVariables
>;
export const DeleteClinicDoctorAvailabilityDocument = gql`
	mutation deleteClinicDoctorAvailability($id: ID!) {
		packet {
			deleteClinicDoctorAvailability(id: $id)
		}
	}
`;
export type DeleteClinicDoctorAvailabilityMutationFn = Apollo.MutationFunction<
	DeleteClinicDoctorAvailabilityMutation,
	DeleteClinicDoctorAvailabilityMutationVariables
>;

/**
 * __useDeleteClinicDoctorAvailabilityMutation__
 *
 * To run a mutation, you first call `useDeleteClinicDoctorAvailabilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClinicDoctorAvailabilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClinicDoctorAvailabilityMutation, { data, loading, error }] = useDeleteClinicDoctorAvailabilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClinicDoctorAvailabilityMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteClinicDoctorAvailabilityMutation,
		DeleteClinicDoctorAvailabilityMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteClinicDoctorAvailabilityMutation, DeleteClinicDoctorAvailabilityMutationVariables>(
		DeleteClinicDoctorAvailabilityDocument,
		options,
	);
}
export type DeleteClinicDoctorAvailabilityMutationHookResult = ReturnType<
	typeof useDeleteClinicDoctorAvailabilityMutation
>;
export type DeleteClinicDoctorAvailabilityMutationResult =
	Apollo.MutationResult<DeleteClinicDoctorAvailabilityMutation>;
export type DeleteClinicDoctorAvailabilityMutationOptions = Apollo.BaseMutationOptions<
	DeleteClinicDoctorAvailabilityMutation,
	DeleteClinicDoctorAvailabilityMutationVariables
>;
export const SearchClinicTableDocument = gql`
	query searchClinicTable($clinicId: String!, $dateFrom: _DateTime!, $dateTo: _DateTime!) {
		searchClinicTable(cond: "it.clinic.id == \${clinicId} && it.endDate >= \${dateFrom} && it.beginDate <= \${dateTo}")
			@strExpr(string: $clinicId, dateTimes: [$dateFrom, $dateTo]) {
			elems {
				...ClinicTableAttributes
			}
		}
	}
	${ClinicTableAttributesFragmentDoc}
`;

/**
 * __useSearchClinicTableQuery__
 *
 * To run a query within a React component, call `useSearchClinicTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicTableQuery({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      dateFrom: // value for 'dateFrom'
 *      dateTo: // value for 'dateTo'
 *   },
 * });
 */
export function useSearchClinicTableQuery(
	baseOptions: Apollo.QueryHookOptions<SearchClinicTableQuery, SearchClinicTableQueryVariables> &
		({ variables: SearchClinicTableQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchClinicTableQuery, SearchClinicTableQueryVariables>(SearchClinicTableDocument, options);
}
export function useSearchClinicTableLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SearchClinicTableQuery, SearchClinicTableQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchClinicTableQuery, SearchClinicTableQueryVariables>(
		SearchClinicTableDocument,
		options,
	);
}
export function useSearchClinicTableSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<SearchClinicTableQuery, SearchClinicTableQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchClinicTableQuery, SearchClinicTableQueryVariables>(
		SearchClinicTableDocument,
		options,
	);
}
export type SearchClinicTableQueryHookResult = ReturnType<typeof useSearchClinicTableQuery>;
export type SearchClinicTableLazyQueryHookResult = ReturnType<typeof useSearchClinicTableLazyQuery>;
export type SearchClinicTableSuspenseQueryHookResult = ReturnType<typeof useSearchClinicTableSuspenseQuery>;
export type SearchClinicTableQueryResult = Apollo.QueryResult<SearchClinicTableQuery, SearchClinicTableQueryVariables>;
export const SearchClinicTableByCustomerDocument = gql`
	query searchClinicTableByCustomer($customerId: String!, $dateFrom: _DateTime!, $dateTo: _DateTime!) {
		searchClinicTable(
			cond: "it.customer.entityId == \${customerId} && it.endDate >= \${dateFrom} && it.beginDate <= \${dateTo}"
		) @strExpr(string: $customerId, dateTimes: [$dateFrom, $dateTo]) {
			elems {
				...ClinicTableAttributes
			}
		}
	}
	${ClinicTableAttributesFragmentDoc}
`;

/**
 * __useSearchClinicTableByCustomerQuery__
 *
 * To run a query within a React component, call `useSearchClinicTableByCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchClinicTableByCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchClinicTableByCustomerQuery({
 *   variables: {
 *      customerId: // value for 'customerId'
 *      dateFrom: // value for 'dateFrom'
 *      dateTo: // value for 'dateTo'
 *   },
 * });
 */
export function useSearchClinicTableByCustomerQuery(
	baseOptions: Apollo.QueryHookOptions<SearchClinicTableByCustomerQuery, SearchClinicTableByCustomerQueryVariables> &
		({ variables: SearchClinicTableByCustomerQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchClinicTableByCustomerQuery, SearchClinicTableByCustomerQueryVariables>(
		SearchClinicTableByCustomerDocument,
		options,
	);
}
export function useSearchClinicTableByCustomerLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SearchClinicTableByCustomerQuery,
		SearchClinicTableByCustomerQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchClinicTableByCustomerQuery, SearchClinicTableByCustomerQueryVariables>(
		SearchClinicTableByCustomerDocument,
		options,
	);
}
export function useSearchClinicTableByCustomerSuspenseQuery(
	baseOptions?:
		| Apollo.SkipToken
		| Apollo.SuspenseQueryHookOptions<SearchClinicTableByCustomerQuery, SearchClinicTableByCustomerQueryVariables>,
) {
	const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchClinicTableByCustomerQuery, SearchClinicTableByCustomerQueryVariables>(
		SearchClinicTableByCustomerDocument,
		options,
	);
}
export type SearchClinicTableByCustomerQueryHookResult = ReturnType<typeof useSearchClinicTableByCustomerQuery>;
export type SearchClinicTableByCustomerLazyQueryHookResult = ReturnType<typeof useSearchClinicTableByCustomerLazyQuery>;
export type SearchClinicTableByCustomerSuspenseQueryHookResult = ReturnType<
	typeof useSearchClinicTableByCustomerSuspenseQuery
>;
export type SearchClinicTableByCustomerQueryResult = Apollo.QueryResult<
	SearchClinicTableByCustomerQuery,
	SearchClinicTableByCustomerQueryVariables
>;
export const CreateClinicTableDocument = gql`
	mutation createClinicTable(
		$clinicId: ID!
		$clinicDoctorId: ID!
		$beginDate: _DateTime!
		$endDate: _DateTime!
		$clinicOfficeId: ID!
		$customerId: String!
	) {
		packet {
			createClinicTable(
				input: {
					clinic: $clinicId
					clinicDoctor: $clinicDoctorId
					clinicOffice: $clinicOfficeId
					customer: { entityId: $customerId }
					beginDate: $beginDate
					endDate: $endDate
				}
			) {
				...ClinicTableAttributes
			}
		}
	}
	${ClinicTableAttributesFragmentDoc}
`;
export type CreateClinicTableMutationFn = Apollo.MutationFunction<
	CreateClinicTableMutation,
	CreateClinicTableMutationVariables
>;

/**
 * __useCreateClinicTableMutation__
 *
 * To run a mutation, you first call `useCreateClinicTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClinicTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClinicTableMutation, { data, loading, error }] = useCreateClinicTableMutation({
 *   variables: {
 *      clinicId: // value for 'clinicId'
 *      clinicDoctorId: // value for 'clinicDoctorId'
 *      beginDate: // value for 'beginDate'
 *      endDate: // value for 'endDate'
 *      clinicOfficeId: // value for 'clinicOfficeId'
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
export function useCreateClinicTableMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateClinicTableMutation, CreateClinicTableMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateClinicTableMutation, CreateClinicTableMutationVariables>(
		CreateClinicTableDocument,
		options,
	);
}
export type CreateClinicTableMutationHookResult = ReturnType<typeof useCreateClinicTableMutation>;
export type CreateClinicTableMutationResult = Apollo.MutationResult<CreateClinicTableMutation>;
export type CreateClinicTableMutationOptions = Apollo.BaseMutationOptions<
	CreateClinicTableMutation,
	CreateClinicTableMutationVariables
>;
export const DeleteClinicTableDocument = gql`
	mutation deleteClinicTable($id: ID!) {
		packet {
			deleteClinicTable(id: $id)
		}
	}
`;
export type DeleteClinicTableMutationFn = Apollo.MutationFunction<
	DeleteClinicTableMutation,
	DeleteClinicTableMutationVariables
>;

/**
 * __useDeleteClinicTableMutation__
 *
 * To run a mutation, you first call `useDeleteClinicTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClinicTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClinicTableMutation, { data, loading, error }] = useDeleteClinicTableMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClinicTableMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteClinicTableMutation, DeleteClinicTableMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteClinicTableMutation, DeleteClinicTableMutationVariables>(
		DeleteClinicTableDocument,
		options,
	);
}
export type DeleteClinicTableMutationHookResult = ReturnType<typeof useDeleteClinicTableMutation>;
export type DeleteClinicTableMutationResult = Apollo.MutationResult<DeleteClinicTableMutation>;
export type DeleteClinicTableMutationOptions = Apollo.BaseMutationOptions<
	DeleteClinicTableMutation,
	DeleteClinicTableMutationVariables
>;
