/*jshint -W069 */
import axios, { AxiosResponse,AxiosRequestConfig } from 'axios'
// dtos


export type AccountUserInfo = {
  disableTime ? :  string  
  isDisable ? :  number  
  lastLoginIp ? :  string  
  lastLoginPlace ? :  string  
  lastLoginTime ? :  string  
  openId ? :  string  
    
}

export type AppDTO = {
  cnName ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  desc ? :  string  
  gitUrl ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  name ? :  string  
    
}

export type AppEnvValueDTO = {
  appId ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  envId ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  value ? :   object 
    
}

export type AppRequestDTO = {
  cnName ? :  string  
  desc ? :  string  
  gitUrl ? :  string  
  name ? :  string  
    
}

export type AppVersionDTO = {
  appId ? :  string  
  branch ? :  string  
  buildNumber ? :  number  
  changeLog ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  id ? :  string  
  lastCommitId ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  status ? :  'RUNNING' | 'SUCCESS' | 'FAILURE'  
  version ? :  string  
    
}

export type AppVersionRequestDTO = {
  branch ? :  string  
  buildNumber :  number  
  changeLog ? :  string  
  lastCommitId ? :  string  
  version ? :  string  
    
}

export type Banner = {
  bannerId ? :  string  
  bannerLink ? :  string  
  bannerPath ? :  string  
  bannerSort ? :  number  
  createTime ? :  string  
  creator ? :  string  
  lang ? :  string  
  mainId ? :  string  
  platformType ? :  number  
  status ? :  number  
  updateTime ? :  string  
    
}

export type BasePayloadResponse = {
  data ? :   object 
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfAppDTO = {
  data ? :  AppDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfAppEnvValueDTO = {
  data ? :  AppEnvValueDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfContent = {
  data ? :  Content  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfDemandDTO = {
  data ? :  DemandDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfDemandLog = {
  data ? :  DemandLog  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfDeployEnvDTO = {
  data ? :  DeployEnvDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfDeploymentRequestDTO = {
  data ? :  DeploymentRequestDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfJSONArray = {
  data ? :   Array <object>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfJSONObject = {
  data ? :   object 
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfLabel = {
  data ? :   Array <Label>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfMarkConfig = {
  data ? :   Array <MarkConfig>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfMenu = {
  data ? :   Array <Menu>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfPipelineJob = {
  data ? :   Array <PipelineJob>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfPipelineTaskNode = {
  data ? :   Array <PipelineTaskNode>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfRole = {
  data ? :   Array <Role>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfTaskCategoryDTO = {
  data ? :   Array <TaskCategoryDTO>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfTaskNodeDTO = {
  data ? :   Array <TaskNodeDTO>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfTaskStepTemplate = {
  data ? :   Array <TaskStepTemplate>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfTaskType = {
  data ? :   Array <TaskType>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfTreeMenuVo = {
  data ? :   Array <TreeMenuVo>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfViewConfigHistory = {
  data ? :   Array <ViewConfigHistory>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfListOfstring = {
  data ? :   Array <string>
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfMapOfstringAndstring = {
  data ? :   object 
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfMarkConfig = {
  data ? :  MarkConfig  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfMarkTemplateDTO = {
  data ? :  MarkTemplateDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfMarkTemplateVersionDTO = {
  data ? :  MarkTemplateVersionDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfBanner = {
  data ? :  PageInfoOfBanner  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfGuild = {
  data ? :  PageInfoOfGuild  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfMenu = {
  data ? :  PageInfoOfMenu  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfRole = {
  data ? :  PageInfoOfRole  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfSubTeamVo = {
  data ? :  PageInfoOfSubTeamVo  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfUserAccountDTO = {
  data ? :  PageInfoOfUserAccountDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageInfoOfUserRole = {
  data ? :  PageInfoOfUserRole  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPageOfContent = {
  data ? :  PageOfContent  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipeline = {
  data ? :  Pipeline  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipelineJob = {
  data ? :  PipelineJob  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipelineJobLog = {
  data ? :  PipelineJobLog  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipelineJobsResp = {
  data ? :  PipelineJobsResp  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipelineListResp = {
  data ? :  PipelineListResp  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipelineStateDTO = {
  data ? :  PipelineStateDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPipelineTaskNode = {
  data ? :  PipelineTaskNode  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPrototypeAppDTO = {
  data ? :  PrototypeAppDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfPrototypeAppVersionDTO = {
  data ? :  PrototypeAppVersionDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfRole = {
  data ? :  Role  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfTaskCategory = {
  data ? :  TaskCategory  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfTaskNode = {
  data ? :  TaskNode  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfTaskType = {
  data ? :  TaskType  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfTheme = {
  data ? :  Theme  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfUserAccount = {
  data ? :  UserAccount  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfUserDTO = {
  data ? :  UserDTO  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfVoid = {
  desc ? :  string  
  retcode ? :  string  
    
}

export type BasePayloadResponseOfstring = {
  data ? :  string  
  desc ? :  string  
  retcode ? :  string  
    
}

export type BaseResponse = {
  desc ? :  string  
  retcode ? :  string  
    
}

export type ChangePwdReqParam = {
  password ? :  string  
    
}

export type CloseDemand = {
  closeReason ? :  string  
  demandNo :  string  
    
}

export type Content = {
  answerType ? :  string  
  contentDetail ? :  string  
  contentId ? :  string  
  contentName ? :  string  
  contentType ? :  number  
  createTime ? :  number  
  creator ? :  string  
  lang ? :  string  
  lastModifiedBy ? :  string  
  mainId ? :  string  
  platformType ? :  number  
  shortContentName ? :  string  
  status ? :  number  
  thumbnailUrl ? :  string  
  updateTime ? :  number  
  videoUrl ? :  string  
    
}

export type CookieReq = {
  domain ? :  string  
  token ? :  string  
    
}

export type CreateFolderParam = {
  createFolderName ? :  string  
  currentDir ? :  string  
    
}

export type CustomeFormField = {
  defaultValue ? :  string  
  desc ? :  string  
  errorMessage ? :  string  
  formEditType ? :  string  
  name ? :  string  
  placeholder ? :  string  
  required ? :  boolean  
  tooltip ? :  string  
  validRegex ? :  string  
  values ? :   Array <string>
    
}

export type DecompressionFileParam = {
  fullFileName ? :  string  
    
}

export type DelParam = {
  fullFileNames ? :  string  
    
}

export type Demand = {
  appendixName ? :  string  
  appendixPath ? :  string  
  closeReason ? :  string  
  contactInfo ? :  string  
  createTime ? :  string  
  customer ? :  string  
  dataTypes ? :   Array <'IMAGE' | 'TEXT' | 'AUDIO' | 'VEDIO' | 'HTML'>
  demandDesc :  string  
  demandName :  string  
  demandNo ? :  string  
  demandType :  'PURPOSE' | 'DATA' | 'TOOL' | 'OTHER'  
  endTime ? :  string  
  expecteData ? :  number  
  id ? :  string  
  legal ? :  boolean  
  process ? :  number  
  status ? :  'PENDING' | 'PROCESSING' | 'DONE'  
  userId ? :  string  
    
}

export type DemandDTO = {
  appendixName ? :  string  
  appendixPath ? :  string  
  closeReason ? :  string  
  companyName ? :  string  
  consultant ? :  string  
  contactInfo ? :  string  
  createTime ? :  string  
  customer ? :  string  
  customerName ? :  string  
  dataTypes ? :   Array <'IMAGE' | 'TEXT' | 'AUDIO' | 'VEDIO' | 'HTML'>
  demandDesc ? :  string  
  demandName ? :  string  
  demandNo ? :  string  
  demandType ? :  'PURPOSE' | 'DATA' | 'TOOL' | 'OTHER'  
  email ? :  string  
  endTime ? :  string  
  expecteData ? :  number  
  phone ? :  string  
  process ? :  number  
  status ? :  'PENDING' | 'PROCESSING' | 'DONE'  
  taskTeamName ? :  string  
  userType ? :  number  
    
}

export type DemandLog = {
  appendixName ? :  string  
  appendixPath ? :  string  
  consultant ? :  string  
  consultantId ? :  string  
  deliveryTime ? :  string  
  demandNo ? :  string  
  endTime ? :  string  
  payment ? :  number  
  solutionDesc ? :  string  
  startTime ? :  string  
  taskTeamId ? :  string  
  taskTeamName ? :  string  
    
}

export type DeployApp = {
  appId ? :  string  
  appName ? :  string  
  branch ? :  string  
  gray :  boolean  
  grayKey ? :  string  
  grayType ? :  number  
  grayValue ? :  string  
  grayWeight ? :  number  
  id ? :  string  
  name ? :  string  
  version ? :  string  
    
}

export type DeployEnvDTO = {
  autoDeploy ? :  boolean  
  className ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  defaultSpringProfile ? :  string  
  deployAppList ? :   Array <DeployApp>
  domain ? :  string  
  gitUrl ? :  string  
  id ? :  string  
  identification ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  name ? :  string  
    
}

export type DeployEnvRequestDTO = {
  autoDeploy :  boolean  
  className ? :  string  
  defaultSpringProfile ? :  string  
  deployAppList ? :   Array <DeployApp>
  domain ? :  string  
  gitUrl ? :  string  
  identification ? :  string  
  name ? :  string  
    
}

export type DeployLogDTO = {
  buildNumber ? :  number  
  commitId ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  envId ? :  string  
  envName ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  postApps ? :   Array <DeployApp>
  preApps ? :   Array <DeployApp>
  status ? :  'RUNNING' | 'SUCCESS' | 'FAILURE'  
    
}

export type DeployLogRequestDTO = {
  buildNumber :  number  
    
}

export type DeploymentRequestActionDTO = {
  action :  'SAVE' | 'POST' | 'WITHDRAW' | 'APPROVE' | 'REJECT'  
  message ? :  string  
    
}

export type DeploymentRequestDTO = {
  content ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  deployAppList ? :   Array <DeployApp>
  envId ? :  string  
  envName ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  operationLogs ? :   Array <OperationLog>
  status ? :  'SAVED' | 'POST' | 'APPROVED' | 'REJECTED'  
  title ? :  string  
    
}

export type DeploymentRequestPostDTO = {
  action :  'SAVE' | 'POST' | 'WITHDRAW' | 'APPROVE' | 'REJECT'  
  content ? :  string  
  deployAppList ? :   Array <DeployApp>
  envId ? :  string  
  envName ? :  string  
  message ? :  string  
  title ? :  string  
    
}

export type Diction = {
  createTime ? :  string  
  creator ? :  string  
  dataCode ? :  string  
  dataId ? :  string  
  dataType ? :  string  
  dataValue ? :  string  
  status ? :  string  
  updateTime ? :  string  
    
}

export type EditFileParam = {
  content ? :  string  
  fullFileName ? :  string  
    
}

export type FileAttribute = {
  createTime ? :  string  
  creatorUserName ? :  string  
  dataSize ? :  string  
  dataType ? :  string  
  directory ? :  boolean  
  exactDataSize ? :  number  
  fullFileName ? :  string  
  name ? :  string  
  parentDir ? :  string  
  permission ? :  string  
  status ? :  number  
    
}

export type Guild = {
  bankAccount ? :  string  
  bankAddress ? :  string  
  bankDetailAddress ? :  string  
  bankName ? :  string  
  businessLicense ? :  string  
  companyAddress ? :  string  
  companyIntroduction ? :  string  
  companyName ? :  string  
  createAccount ? :  string  
  createName ? :  string  
  createTime ? :  string  
  descriptionvar ? :  string  
  finishBatchNum ? :  string  
  finishCount ? :  number  
  guildLeader ? :  string  
  guildtype ? :  number  
  headPic ? :  string  
  historySumIntegral ? :  number  
  id ? :  string  
  label ? :  string  
  leaderEmail ? :  string  
  leaderPhone ? :  string  
  leaderQq ? :  string  
  location ? :  string  
  memerCount ? :  number  
  monthSumIntegral ? :  number  
  name ? :  string  
  ongoingBatchNum ? :  number  
  ongoingTask ? :  number  
  passrate ? :  number  
  skilled ? :  string  
  status ? :  number  
  taxpayerIdentificationNumber ? :  string  
  type ? :  number  
  updateTime ? :  string  
  userId ? :  string  
    
}

export type InputStream = {
    
}

export type JSONObject = {
    
}

export type Label = {
  labelCn ? :  string  
  labelEn ? :  string  
  labelId ? :  string  
  labelType ? :  number  
  status ? :  number  
    
}

export type Link = {
  href ? :  string  
  templated ? :  boolean  
    
}

export type ListFileResp = {
  desc ? :  string  
  fileAttributes ? :   Array <FileAttribute>
  retcode ? :  string  
  total ? :  number  
    
}

export type Location = {
  x ? :  number  
  y ? :  number  
    
}

export type LoginReqParam = {
  account ? :  string  
  password ? :  string  
  rememberMe ? :  boolean  
  userId ? :  string  
    
}

export type LoginResp = {
  accessToken ? :  string  
  authorities ? :   Array <string>
  desc ? :  string  
  retcode ? :  string  
    
}

export type MapOfstringAndLink = {
    
}

export type MapOfstringAndstring = {
    
}

export type MarkConfig = {
  businessBatchConfig ? :   Array <object>
  channelId ? :  string  
  customConfig ? :   object 
  describe ? :  string  
  environment ? :  string  
  flowTask ? :   Array <object>
  markTemplateId ? :  string  
  modeName ? :  string  
  modelId ? :  string  
  modelType ? :  string  
  nextMarkModel ? :   object 
  sampleData ? :  string  
  status ? :  number  
  stepConfig ? :   object 
  tasks ? :  TaskConfig  
  viewConfig ? :   object 
  views ? :  ViewConfig  
    
}

export type MarkTemplateDTO = {
  createdBy ? :  string  
  createdDate ? :  string  
  desc ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  name ? :  string  
    
}

export type MarkTemplateRequestDTO = {
  desc ? :  string  
  name ? :  string  
    
}

export type MarkTemplateVersionDTO = {
  createdBy ? :  string  
  createdDate ? :  string  
  desc ? :  string  
  env ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  path ? :  string  
  templateId ? :  string  
  version ? :  number  
    
}

export type MarkTemplateVersionRequestDTO = {
  config :   object 
  desc ? :  string  
  env ? :  string  
    
}

export type Menu = {
  childrenMenu ? :   Array <Menu>
  createTime ? :  string  
  creator ? :  string  
  icon ? :  string  
  menuId ? :  string  
  menuName ? :  string  
  menuOrder ? :  string  
  menuType ? :  number  
  parentId ? :  string  
  platformType ? :  number  
  updateTime ? :  string  
  url ? :  string  
    
}

export type ModelAndView = {
  empty ? :  boolean  
  model ? :   object 
  modelMap ? :   object 
  reference ? :  boolean  
  status ? :  '100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '451' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'  
  view ? :  View  
  viewName ? :  string  
    
}

export type MoveFileParam = {
  fullFileName ? :  string  
  newDirFileName ? :  string  
    
}

export type OperationLog = {
  action ? :  'SAVE' | 'POST' | 'WITHDRAW' | 'APPROVE' | 'REJECT'  
  createdDate ? :  string  
  message ? :  string  
  userId ? :  string  
    
}

export type PageDataResponse = {
  desc ? :  string  
  items ? :   Array <object>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfAppDTO = {
  desc ? :  string  
  items ? :   Array <AppDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfAppVersionDTO = {
  desc ? :  string  
  items ? :   Array <AppVersionDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfDemandDTO = {
  desc ? :  string  
  items ? :   Array <DemandDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfDeployEnvDTO = {
  desc ? :  string  
  items ? :   Array <DeployEnvDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfDeployLogDTO = {
  desc ? :  string  
  items ? :   Array <DeployLogDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfDeploymentRequestDTO = {
  desc ? :  string  
  items ? :   Array <DeploymentRequestDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfMarkTemplateDTO = {
  desc ? :  string  
  items ? :   Array <MarkTemplateDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfMarkTemplateVersionDTO = {
  desc ? :  string  
  items ? :   Array <MarkTemplateVersionDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfPrototypeAppDTO = {
  desc ? :  string  
  items ? :   Array <PrototypeAppDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageDataResponseOfPrototypeAppVersionDTO = {
  desc ? :  string  
  items ? :   Array <PrototypeAppVersionDTO>
  page ? :  number  
  retcode ? :  string  
  size ? :  number  
  total ? :  number  
    
}

export type PageInfoOfBanner = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <Banner>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageInfoOfGuild = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <Guild>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageInfoOfMenu = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <Menu>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageInfoOfRole = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <Role>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageInfoOfSubTeamVo = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <SubTeamVo>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageInfoOfUserAccountDTO = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <UserAccountDTO>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageInfoOfUserRole = {
  endRow ? :  number  
  hasNextPage ? :  boolean  
  hasPreviousPage ? :  boolean  
  isFirstPage ? :  boolean  
  isLastPage ? :  boolean  
  list ? :   Array <UserRole>
  navigateFirstPage ? :  number  
  navigateLastPage ? :  number  
  navigatePages ? :  number  
  navigatepageNums ? :   Array <number>
  nextPage ? :  number  
  pageNum ? :  number  
  pageSize ? :  number  
  pages ? :  number  
  prePage ? :  number  
  size ? :  number  
  startRow ? :  number  
  total ? :  number  
    
}

export type PageOfContent = {
  content ? :   Array <Content>
  first ? :  boolean  
  last ? :  boolean  
  number ? :  number  
  numberOfElements ? :  number  
  size ? :  number  
  sort ? :  Sort  
  totalElements ? :  number  
  totalPages ? :  number  
    
}

export type Pipeline = {
  desc ? :  string  
  id ? :  string  
  isAvailable ? :  number  
  json ? :  string  
  modifySetupTime ? :  number  
  name ? :  string  
  nextStartTime ? :  number  
  startConfig ? :   object 
  status ? :  'UNSTARTED' | 'START' | 'TIMINGSTART'  
    
}

export type PipelineJob = {
  id ? :  string  
  pipeline :  Pipeline  
  result ? :  RuntimeResult  
  status ? :  'AVAIABLE' | 'DISABLE' | 'APPROVED' | 'REJECTED' | 'RUNNING' | 'FINISHING' | 'FINISHED' | 'SUCCESS' | 'FAIL'  
  workingDir ? :  string  
    
}

export type PipelineJobDTO = {
  pipelineId ? :  string  
  pipelineJobFt ? :  number  
  pipelineJobId ? :  string  
  pipelineJobSt ? :  number  
  pipelineJobStatus ? :  'AVAIABLE' | 'DISABLE' | 'APPROVED' | 'REJECTED' | 'RUNNING' | 'FINISHING' | 'FINISHED' | 'SUCCESS' | 'FAIL'  
  pipelineName ? :  string  
    
}

export type PipelineJobLog = {
  currentTask ? :  string  
  exitedValue ? :  number  
  logs ? :   Array <PipelineTaskLog>
  pipelineJobFt ? :  number  
  pipelineJobSt ? :  number  
  status ? :  'AVAIABLE' | 'DISABLE' | 'APPROVED' | 'REJECTED' | 'RUNNING' | 'FINISHING' | 'FINISHED' | 'SUCCESS' | 'FAIL'  
    
}

export type PipelineJobsResp = {
  pipelineJobDTOs ? :   Array <PipelineJobDTO>
  total ? :  number  
    
}

export type PipelineListResp = {
  pipelineStates ? :   Array <PipelineStateDTO>
  total ? :  number  
    
}

export type PipelineStateDTO = {
  createTime ? :  number  
  desc ? :  string  
  failId ? :  string  
  failTime ? :  number  
  id ? :  string  
  name ? :  string  
  nextStartTime ? :  number  
  pipelineState ? :  'UNSTARTED' | 'START' | 'TIMINGSTART'  
  startConfig ? :   object 
  status ? :  'AVAIABLE' | 'DISABLE' | 'APPROVED' | 'REJECTED' | 'RUNNING' | 'FINISHING' | 'FINISHED' | 'SUCCESS' | 'FAIL'  
  successId ? :  string  
  successTime ? :  number  
    
}

export type PipelineTask2TaskNodeReq = {
  name ? :  string  
  pipelineTaskId ? :  string  
    
}

export type PipelineTaskAddByTaskNodeReq = {
  location ? :  Location  
  pipelineId ? :  string  
  pipelineTaskNodeType ? :  string  
  taskNodeId ? :  string  
    
}

export type PipelineTaskLog = {
  exitedValue ? :  number  
  logs ? :   Array <string>
  pipelineTaskId ? :  string  
  pipelineTaskName ? :  string  
  status ? :  'AVAIABLE' | 'DISABLE' | 'APPROVED' | 'REJECTED' | 'RUNNING' | 'FINISHING' | 'FINISHED' | 'SUCCESS' | 'FAIL'  
    
}

export type PipelineTaskNode = {
  argValues ? :  string  
  args ? :   Array <CustomeFormField>
  bin ? :  string  
  commands ? :   Array <string>
  id ? :  string  
  inputPorts ? :   Array <TaskNodePort>
  isReused ? :  boolean  
  location ? :  Location  
  name ? :  string  
  outputFields ? :   Array <TaskFields>
  outputPorts ? :   Array <TaskNodePort>
  pipeline :  Pipeline  
  pipelineTaskNodeType ? :  string  
  publishId ? :  string  
  share ? :  boolean  
  systemNode ? :  TaskNode  
  taskCategory ? :  TaskCategory  
  taskType ? :  TaskType  
  userId ? :  string  
  wires ? :   Array <Wire>
  workingDir ? :  string  
    
}

export type PipelineTaskRenameReq = {
  name ? :  string  
  pipelineTaskId ? :  string  
    
}

export type PrototypeAppDTO = {
  cnName ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  desc ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  name ? :  string  
    
}

export type PrototypeAppRequestDTO = {
  cnName ? :  string  
  desc ? :  string  
  name ? :  string  
    
}

export type PrototypeAppVersionDTO = {
  appId ? :  string  
  changeLog ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  url ? :  string  
  version ? :  number  
    
}

export type RenameFileParam = {
  fullFileName ? :  string  
  newName ? :  string  
    
}

export type ResponseBody = {
    
}

export type ResponseEntity = {
  body ? :   object 
  statusCode ? :  '100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' | '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' | '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' | '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '451' | '500' | '501' | '502' | '503' | '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511'  
  statusCodeValue ? :  number  
    
}

export type Role = {
  createTime ? :  string  
  creator ? :  string  
  platformType ? :  number  
  roleDesc ? :  string  
  roleId ? :  string  
  roleName ? :  string  
  updateTime ? :  string  
    
}

export type RoleMenu = {
  createTime ? :  string  
  creator ? :  string  
  menuId ? :  string  
  roleId ? :  string  
  roleMenuId ? :  string  
  updateTime ? :  string  
    
}

export type RuntimeResult = {
  error ? :  boolean  
  output ? :  string  
  runtimeResultType ? :  'ERROR' | 'SUCCESS'  
  success ? :  boolean  
    
}

export type Sort = {
  sorted ? :  boolean  
  unsorted ? :  boolean  
    
}

export type SubTeamVo = {
  account ? :  string  
  channelId ? :  string  
  createdTime ? :  string  
  description ? :  string  
  realName ? :  string  
  teamId ? :  string  
  teamName ? :  string  
  userCount ? :  string  
    
}

export type TaskCategory = {
  id ? :  string  
  name ? :  string  
  parent ? :  TaskCategory  
    
}

export type TaskCategoryDTO = {
  children ? :   Array <TaskCategoryDTO>
  id ? :  string  
  taskNodeDTOs ? :   Array <TaskNodeDTO>
  title ? :  string  
    
}

export type TaskConfig = {
  createBatchTaskFlowId ? :  string  
  createMedalTaskFlowId ? :  string  
  flow ? :   Array <object>
  integralHandle ? :  string  
  recoveryStrategy ? :  string  
  taskExportTaskFlowId ? :  string  
  transferStrategy ? :  string  
    
}

export type TaskFields = {
  dataType ? :  'DOUBLE' | 'STRING' | 'INTEGER'  
  name ? :  string  
    
}

export type TaskNode = {
  args ? :   Array <CustomeFormField>
  bin ? :  string  
  category ? :  TaskCategory  
  commands ? :   Array <string>
  compatibleToDataFlow ? :  boolean  
  dataFlow ? :  boolean  
  desc ? :  string  
  enableEditArgs ? :  boolean  
  enableEditCommand ? :  boolean  
  id ? :  string  
  inputPorts ? :   Array <TaskNodePort>
  isCustom ? :  boolean  
  name ? :  string  
  nodeType ? :  TaskType  
  outputFields ? :   Array <TaskFields>
  outputPorts ? :   Array <TaskNodePort>
  userId ? :  string  
    
}

export type TaskNodeDTO = {
  categoryId ? :  string  
  desc ? :  string  
  id ? :  string  
  isCustom ? :  boolean  
  title ? :  string  
    
}

export type TaskNodePort = {
  argName ? :  string  
  description ? :  string  
  displayType ? :  string  
  index ? :  number  
  type ? :  number  
    
}

export type TaskStepTemplate = {
  config ? :   object 
  configId ? :  string  
  enable ? :  boolean  
  id ? :  string  
  name ? :  string  
    
}

export type TaskType = {
  command ? :  string  
  desc ? :  string  
  id ? :  string  
  image ? :  string  
  name ? :  string  
  status ? :  'AVAIABLE' | 'DISABLE' | 'APPROVED' | 'REJECTED' | 'RUNNING' | 'FINISHING' | 'FINISHED' | 'SUCCESS' | 'FAIL'  
    
}

export type TeamManagerTeam = {
  company ? :   object 
  createdTime ? :  string  
  description ? :  string  
  id ? :  string  
  name ? :  string  
  parentId ? :  string  
    
}

export type Theme = {
  endTime ? :  string  
  startTime ? :  string  
  status ? :  number  
  themeId ? :  string  
    
}

export type TreeMenuVo = {
  checked ? :  boolean  
  children ? :   Array <TreeMenuVo>
  expand ? :  boolean  
  icon ? :  string  
  menuId ? :  string  
  platformType ? :  number  
  title ? :  string  
  url ? :  string  
    
}

export type Type = {
  typeName ? :  string  
    
}

export type UserAccount = {
  account ? :  string  
  companyName ? :  string  
  contact ? :  string  
  contactName ? :  string  
  createTime ? :  string  
  creator ? :  string  
  email ? :  string  
  headPic ? :  string  
  jobType ? :  number  
  level ? :  number  
  openId ? :  string  
  openStatus ? :  number  
  password ? :  string  
  phone ? :  string  
  status ? :  number  
  updateTime ? :  string  
  userName ? :  string  
  userType ? :  number  
    
}

export type UserAccountDTO = {
  email ? :  string  
  openId ? :  string  
  phone ? :  string  
  roleName ? :  string  
  status ? :  number  
  userName ? :  string  
    
}

export type UserDTO = {
  activated ? :  boolean  
  authorities ? :   Array <string>
  createdBy ? :  string  
  createdDate ? :  string  
  email ? :  string  
  id ? :  string  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  login ? :  string  
  name ? :  string  
    
}

export type UserInfoResp = {
  appId ? :  string  
  cnName ? :  string  
  desc ? :  string  
  email ? :  string  
  enName ? :  string  
  gender ? :  string  
  id ? :  string  
  login ? :  string  
  nickName ? :  string  
  phone ? :  string  
  retcode ? :  string  
    
}

export type UserRole = {
  createTime ? :  string  
  creator ? :  string  
  roleId ? :  string  
  updateTime ? :  string  
  userId ? :  string  
  userRoleId ? :  string  
    
}

export type UserUpdateDTO = {
  activated ? :  boolean  
  authorities ? :   Array <string>
  email ? :  string  
  login ? :  string  
  name ? :  string  
  password ? :  string  
    
}

export type View = {
  contentType ? :  string  
    
}

export type ViewConfig = {
  viewCreateBatch ? :  string  
  viewCreateMedal ? :  string  
  viewExport ? :  string  
  viewMarkPage ? :  string  
  viewMarkTaskPage ? :  string  
  viewMedalPage ? :  string  
  viewMyIntegralDetail ? :  string  
  viewResultPage ? :  string  
    
}

export type ViewConfigHistory = {
  id ? :  string  
  modelId ? :  string  
  version ? :  number  
  views ? :  ViewConfig  
    
}

export type Wire = {
  desId ? :  string  
  desIndex ? :  number  
  srcId ? :  string  
  srcIndex ? :  number  
    
}



  

// start 
/**
 * Web Mvc Endpoint Handler Mapping
 * @class WebMvcEndpointHandlerMappingAPI
 */
export class WebMvcEndpointHandlerMappingAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * links
    * @method
    * @name API#links
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    linksUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
         
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Operation Handler
 * @class OperationHandlerAPI
 */
export class OperationHandlerAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/auditevents',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_1 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/beans',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_2 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/conditions',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_3 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/configprops',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_5 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/env',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_4 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/env/{toMatch}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_6 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/health',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_7 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/heapdump',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/octet-stream';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_8 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/httptrace',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_9 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/info',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_10 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/jhi-metrics',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_12 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/loggers',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_11 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/loggers/{name}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingPOST ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/loggers/{name}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json,application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_13 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/mappings',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_15 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/metrics',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_14 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/metrics/{requiredMetricName}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_16 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/prometheus',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/plain;version=0.0.4;charset=utf-8';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_17 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/scheduledtasks',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
    
    /**
    * handle
    * @method
    * @name API#handle
    
    * @param  body - body 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    handleUsingGET_18 ( parameters : {
      'body'  ?: object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/actuator/threaddump',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'application/json, application/vnd.spring-boot.actuator.v2+json';
      
      config.data = parameters.body;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * App Env Value Controller
 * @class AppEnvValueAPI
 */
export class AppEnvValueAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * updateValues
    * @method
    * @name API#updateValues
    
    * @param string appId - appId 
    
    * @param string envId - envId 
    
    * @param  value - value 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateValuesUsingPUT ( parameters : {
      'appId'  : string,
      'envId'  : string,
      'value'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfAppEnvValueDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app-env-value/update/{appId}/{envId}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.url = config.url.replace('{envId}',parameters.envId+'');
      config.data = parameters.value;   
      return axios.request( config );
    }
    
    /**
    * viewValues
    * @method
    * @name API#viewValues
    
    * @param string appId - appId 
    
    * @param string envId - envId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    viewValuesUsingGET ( parameters : {
      'appId'  : string,
      'envId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfAppEnvValueDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app-env-value/view/{appId}/{envId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.url = config.url.replace('{envId}',parameters.envId+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * App Version Controller
 * @class AppVersionAPI
 */
export class AppVersionAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * listAppBuildProcs
    * @method
    * @name API#listAppBuildProcs
    
    * @param string appId - appId 
    
    * @param integer buildNumber - buildNumber 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listAppBuildProcsUsingGET ( parameters : {
      'appId'  : string,
      'buildNumber'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfJSONObject> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app-version/builds/{appId}/{buildNumber}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.url = config.url.replace('{buildNumber}',parameters.buildNumber+'');   
      return axios.request( config );
    }
    
    /**
    * listApps
    * @method
    * @name API#listApps
    
    * @param string appId - appId 
    
    * @param string branch -  
    
    * @param string lastCommitId -  
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param string status -  
    
    * @param string version -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listAppsUsingGET_1 ( parameters : {
      'appId'  : string,
      'branch'  ?: string,
      'lastCommitId'  ?: string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      'status'  ?: 'RUNNING' | 'SUCCESS' | 'FAILURE',
      'version'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfAppVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app-version/list/{appId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.params['branch'] = parameters.branch;
      config.params['lastCommitId'] = parameters.lastCommitId;
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;
      config.params['status'] = parameters.status;
      config.params['version'] = parameters.version;   
      return axios.request( config );
    }
    
    /**
    * listAppBuildProcsLogs
    * @method
    * @name API#listAppBuildProcsLogs
    
    * @param string appId - appId 
    
    * @param integer buildNumber - buildNumber 
    
    * @param integer pid - pid 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listAppBuildProcsLogsUsingGET ( parameters : {
      'appId'  : string,
      'buildNumber'  : number,
      'pid'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfJSONArray> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app-version/logs/{appId}/{buildNumber}/{pid}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.url = config.url.replace('{buildNumber}',parameters.buildNumber+'');
      config.url = config.url.replace('{pid}',parameters.pid+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * App Controller
 * @class AppAPI
 */
export class AppAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createApp
    * @method
    * @name API#createApp
    
    * @param  createDto - createDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createAppUsingPOST ( parameters : {
      'createDto'  : AppRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfAppDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.createDto;   
      return axios.request( config );
    }
    
    /**
    * delApp
    * @method
    * @name API#delApp
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    delAppUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app/del/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * listApps
    * @method
    * @name API#listApps
    
    * @param string name - name 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listAppsUsingGET ( parameters : {
      'name'  ?: string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfAppDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['name'] = parameters.name;
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;   
      return axios.request( config );
    }
    
    /**
    * updateApp
    * @method
    * @name API#updateApp
    
    * @param string id - id 
    
    * @param  updateDto - updateDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateAppUsingPUT ( parameters : {
      'id'  : string,
      'updateDto'  : AppRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfAppDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/app/update/{id}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.data = parameters.updateDto;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Demand Log Controller
 * @class DemandLogAPI
 */
export class DemandLogAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * getAllDemandLogs
    * @method
    * @name API#getAllDemandLogs
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllDemandLogsUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/backstage/api/demand-logs',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * createDemandLog
    * @method
    * @name API#createDemandLog
    
    * @param  demandLog - demandLog 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createDemandLogUsingPOST ( parameters : {
      'demandLog'  : DemandLog,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDemandLog> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/backstage/api/demand-logs',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.demandLog;   
      return axios.request( config );
    }
    
    /**
    * updateDemandLog
    * @method
    * @name API#updateDemandLog
    
    * @param  demandLog - demandLog 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateDemandLogUsingPUT ( parameters : {
      'demandLog'  : DemandLog,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDemandLog> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/backstage/api/demand-logs',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.demandLog;   
      return axios.request( config );
    }
    
    /**
    * getDemandLog
    * @method
    * @name API#getDemandLog
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getDemandLogUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDemandLog> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/backstage/api/demand-logs/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * deleteDemandLog
    * @method
    * @name API#deleteDemandLog
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteDemandLogUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfVoid> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/backstage/api/demand-logs/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Banner Controller
 * @class BannerAPI
 */
export class BannerAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createBanner
    * @method
    * @name API#createBanner
    
    * @param  banner - banner 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createBannerUsingPOST ( parameters : {
      'banner'  : Banner,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/banner/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.banner;   
      return axios.request( config );
    }
    
    /**
    * deleteBanner
    * @method
    * @name API#deleteBanner
    
    * @param string bannerId - bannerId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteBannerUsingDELETE ( parameters : {
      'bannerId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/banner/delete',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['bannerId'] = parameters.bannerId;   
      return axios.request( config );
    }
    
    /**
    * list
    * @method
    * @name API#list
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param integer platformType - platformType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listUsingGET ( parameters : {
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'platformType'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfBanner> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/banner/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['platformType'] = parameters.platformType;   
      return axios.request( config );
    }
    
    /**
    * updateRole
    * @method
    * @name API#updateRole
    
    * @param  banner - banner 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateRoleUsingPUT ( parameters : {
      'banner'  : Banner,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/banner/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.banner;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Content Controller
 * @class ContentAPI
 */
export class ContentAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * deleteContent
    * @method
    * @name API#deleteContent
    
    * @param string contentId - contentId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteContentUsingDELETE ( parameters : {
      'contentId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/content/delete',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['contentId'] = parameters.contentId;   
      return axios.request( config );
    }
    
    /**
    * saveContent
    * @method
    * @name API#saveContent
    
    * @param  content - content 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveContentUsingPOST ( parameters : {
      'content'  : Content,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfContent> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/content/insert',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.content;   
      return axios.request( config );
    }
    
    /**
    * queryAllByLimit
    * @method
    * @name API#queryAllByLimit
    
    * @param string contentName - contentName 
    
    * @param integer pageNumber - pageNumber 
    
    * @param integer pageSize - pageSize 
    
    * @param integer status - status 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    queryAllByLimitUsingGET ( parameters : {
      'contentName'  ?: string,
      'pageNumber'  ?: number,
      'pageSize'  ?: number,
      'status'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageOfContent> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/content/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['contentName'] = parameters.contentName;
      config.params['pageNumber'] = parameters.pageNumber;
      config.params['pageSize'] = parameters.pageSize;
      config.params['status'] = parameters.status;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string contentId - contentId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET ( parameters : {
      'contentId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfContent> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/content/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['contentId'] = parameters.contentId;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * DV文件管理相关接口
 * @class DatavolumAPI
 */
export class DatavolumAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 新增文件夹
    * @method
    * @name API#新增文件夹
    
    * @param  createFolderParam - createFolderParam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createFolderUsingPOST ( parameters : {
      'createFolderParam'  : CreateFolderParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/createFolder',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.createFolderParam;   
      return axios.request( config );
    }
    
    /**
    * 在线解压
    * @method
    * @name API#在线解压
    
    * @param  param - param 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    onlineDecompressionUsingPOST ( parameters : {
      'param'  : DecompressionFileParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/decompression',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.param;   
      return axios.request( config );
    }
    
    /**
    * 批量删除数据
    * @method
    * @name API#批量删除数据
    
    * @param  delParam - delParam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteObjectUsingDELETE ( parameters : {
      'delParam'  : DelParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/deleteObject',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.data = parameters.delParam;   
      return axios.request( config );
    }
    
    /**
    * 下载数据
    * @method
    * @name API#下载数据
    
    * @param string fullFileNames -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    downloadFilesUsingGET ( parameters : {
      'fullFileNames'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/download',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['fullFileNames'] = parameters.fullFileNames;   
      return axios.request( config );
    }
    
    /**
    * 编辑文件内容
    * @method
    * @name API#编辑文件内容
    
    * @param  editFileParam - editFileParam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    editFileUsingPUT ( parameters : {
      'editFileParam'  : EditFileParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/edit',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.editFileParam;   
      return axios.request( config );
    }
    
    /**
    * 搜索查看数据列表
    * @method
    * @name API#搜索查看数据列表
    
    * @param string currentDir - currentDir 
    
    * @param integer currentPage - currentPage 
    
    * @param string keyWord - keyWord 
    
    * @param integer pageSize - pageSize 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getDirFilesInfoUsingGET ( parameters : {
      'currentDir'  : string,
      'currentPage'  : number,
      'keyWord'  ?: string,
      'pageSize'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ListFileResp> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/getDirFilesInfo',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['currentDir'] = parameters.currentDir;
      config.params['currentPage'] = parameters.currentPage;
      config.params['keyWord'] = parameters.keyWord;
      config.params['pageSize'] = parameters.pageSize;   
      return axios.request( config );
    }
    
    /**
    * 获取目录下子目录集合
    * @method
    * @name API#获取目录下子目录集合
    
    * @param string fullFileName - fullFileName 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listSonDirUsingGET ( parameters : {
      'fullFileName'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/listSonDir',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['fullFileName'] = parameters.fullFileName;   
      return axios.request( config );
    }
    
    /**
    * dv文件上传接口
    * @method
    * @name API#dv文件上传接口
    
    * @param string createFolderName - createFolderName 
    
    * @param string currentDir - currentDir 
    
    * @param file file - file 
    
    * @param string isCreateFolder - isCreateFolder 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPOST ( parameters : {
      'createFolderName'  ?: string,
      'currentDir'  ?: string,
      'file'  : object,
      'isCreateFolder'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/localDataUpload',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
      
      
      
         
      return axios.request( config );
    }
    
    /**
    * 文件移动
    * @method
    * @name API#文件移动
    
    * @param  param - param 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    moveUsingPUT ( parameters : {
      'param'  : MoveFileParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/move',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.param;   
      return axios.request( config );
    }
    
    /**
    * 预览文件内容
    * @method
    * @name API#预览文件内容
    
    * @param string fullFileName - fullFileName 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    previewUsingGET ( parameters : {
      'fullFileName'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/preview',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['fullFileName'] = parameters.fullFileName;   
      return axios.request( config );
    }
    
    /**
    * 预览文档内容
    * @method
    * @name API#预览文档内容
    
    * @param string fullFileName - fullFileName 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    previewDocUsingGET ( parameters : {
      'fullFileName'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/previewDoc',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['fullFileName'] = parameters.fullFileName;   
      return axios.request( config );
    }
    
    /**
    * 文件重命名
    * @method
    * @name API#文件重命名
    
    * @param  param - param 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    renameUsingPUT ( parameters : {
      'param'  : RenameFileParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/datavolum/rename',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.param;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Demand Controller
 * @class DemandAPI
 */
export class DemandAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 查询需求池
    * @method
    * @name API#查询需求池
    
    * @param string demandName -  
    
    * @param string demandNo -  
    
    * @param string demandType -  
    
    * @param string keyword -  
    
    * @param integer pageIndex -  
    
    * @param integer pageSize -  
    
    * @param integer queryType -  
    
    * @param string status -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllDemandsUsingGET ( parameters : {
      'demandName'  ?: string,
      'demandNo'  ?: string,
      'demandType'  ?: 'PURPOSE' | 'DATA' | 'TOOL' | 'OTHER',
      'keyword'  ?: string,
      'pageIndex'  ?: number,
      'pageSize'  ?: number,
      'queryType'  ?: number,
      'status'  ?: 'PENDING' | 'PROCESSING' | 'DONE',
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/demands',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['demandName'] = parameters.demandName;
      config.params['demandNo'] = parameters.demandNo;
      config.params['demandType'] = parameters.demandType;
      config.params['keyword'] = parameters.keyword;
      config.params['pageIndex'] = parameters.pageIndex;
      config.params['pageSize'] = parameters.pageSize;
      config.params['queryType'] = parameters.queryType;
      config.params['status'] = parameters.status;   
      return axios.request( config );
    }
    
    /**
    * createDemand
    * @method
    * @name API#createDemand
    
    * @param  demand - demand 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createDemandUsingPOST ( parameters : {
      'demand'  : Demand,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/demands',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.demand;   
      return axios.request( config );
    }
    
    /**
    * updateDemand
    * @method
    * @name API#updateDemand
    
    * @param  closeDemand - closeDemand 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateDemandUsingPUT ( parameters : {
      'closeDemand'  : CloseDemand,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/demands',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.closeDemand;   
      return axios.request( config );
    }
    
    /**
    * 查询我的需求
    * @method
    * @name API#查询我的需求
    
    * @param string demandName -  
    
    * @param string demandNo -  
    
    * @param string demandType -  
    
    * @param string keyword -  
    
    * @param integer pageIndex -  
    
    * @param integer pageSize -  
    
    * @param integer queryType -  
    
    * @param string status -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getMyDemandsUsingGET ( parameters : {
      'demandName'  ?: string,
      'demandNo'  ?: string,
      'demandType'  ?: 'PURPOSE' | 'DATA' | 'TOOL' | 'OTHER',
      'keyword'  ?: string,
      'pageIndex'  ?: number,
      'pageSize'  ?: number,
      'queryType'  ?: number,
      'status'  ?: 'PENDING' | 'PROCESSING' | 'DONE',
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/demands/mine',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['demandName'] = parameters.demandName;
      config.params['demandNo'] = parameters.demandNo;
      config.params['demandType'] = parameters.demandType;
      config.params['keyword'] = parameters.keyword;
      config.params['pageIndex'] = parameters.pageIndex;
      config.params['pageSize'] = parameters.pageSize;
      config.params['queryType'] = parameters.queryType;
      config.params['status'] = parameters.status;   
      return axios.request( config );
    }
    
    /**
    * getDemand
    * @method
    * @name API#getDemand
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getDemandUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDemandDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/demands/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Deploy Env Controller
 * @class DeployEnvAPI
 */
export class DeployEnvAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * listDeploymentBuilds
    * @method
    * @name API#listDeploymentBuilds
    
    * @param string envId - envId 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listDeploymentBuildsUsingGET ( parameters : {
      'envId'  : string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfDeployLogDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/builds/{envId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{envId}',parameters.envId+'');
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;   
      return axios.request( config );
    }
    
    /**
    * listDeploymentBuildProcs
    * @method
    * @name API#listDeploymentBuildProcs
    
    * @param integer buildNumber - buildNumber 
    
    * @param string envId - envId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listDeploymentBuildProcsUsingGET ( parameters : {
      'buildNumber'  : number,
      'envId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfJSONObject> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/builds/{envId}/{buildNumber}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{buildNumber}',parameters.buildNumber+'');
      config.url = config.url.replace('{envId}',parameters.envId+'');   
      return axios.request( config );
    }
    
    /**
    * createEnv
    * @method
    * @name API#createEnv
    
    * @param  createDto - createDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createEnvUsingPOST ( parameters : {
      'createDto'  : DeployEnvRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDeployEnvDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.createDto;   
      return axios.request( config );
    }
    
    /**
    * delEnv
    * @method
    * @name API#delEnv
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    delEnvUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/del/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * listEnvs
    * @method
    * @name API#listEnvs
    
    * @param string name - name 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listEnvsUsingGET ( parameters : {
      'name'  ?: string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfDeployEnvDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['name'] = parameters.name;
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;   
      return axios.request( config );
    }
    
    /**
    * listDeploymentBuildProcLogs
    * @method
    * @name API#listDeploymentBuildProcLogs
    
    * @param integer buildNumber - buildNumber 
    
    * @param string envId - envId 
    
    * @param integer pid - pid 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listDeploymentBuildProcLogsUsingGET ( parameters : {
      'buildNumber'  : number,
      'envId'  : string,
      'pid'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfJSONArray> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/logs/{envId}/{buildNumber}/{pid}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{buildNumber}',parameters.buildNumber+'');
      config.url = config.url.replace('{envId}',parameters.envId+'');
      config.url = config.url.replace('{pid}',parameters.pid+'');   
      return axios.request( config );
    }
    
    /**
    * pushEnv
    * @method
    * @name API#pushEnv
    
    * @param string destId - destId 
    
    * @param string srcId - srcId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    pushEnvUsingPOST ( parameters : {
      'destId'  : string,
      'srcId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/push/{srcId}/{destId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{destId}',parameters.destId+'');
      config.url = config.url.replace('{srcId}',parameters.srcId+'');   
      return axios.request( config );
    }
    
    /**
    * rollback
    * @method
    * @name API#rollback
    
    * @param string buildId - buildId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    rollbackUsingPOST ( parameters : {
      'buildId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/rollback/{buildId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{buildId}',parameters.buildId+'');   
      return axios.request( config );
    }
    
    /**
    * updateEnv
    * @method
    * @name API#updateEnv
    
    * @param string id - id 
    
    * @param  updateDto - updateDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateEnvUsingPUT ( parameters : {
      'id'  : string,
      'updateDto'  : DeployEnvRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDeployEnvDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deploy-env/update/{id}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.data = parameters.updateDto;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Deploy Controller
 * @class DeployAPI
 */
export class DeployAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * auditDeploymentRequest
    * @method
    * @name API#auditDeploymentRequest
    
    * @param  actionDto - actionDTO 
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    auditDeploymentRequestUsingPOST ( parameters : {
      'actionDto'  : DeploymentRequestActionDTO,
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDeploymentRequestDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deployment/audit/{id}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.actionDto;
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * createDeploymentRequest
    * @method
    * @name API#createDeploymentRequest
    
    * @param  postDto - postDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createDeploymentRequestUsingPOST ( parameters : {
      'postDto'  : DeploymentRequestPostDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDeploymentRequestDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deployment/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.postDto;   
      return axios.request( config );
    }
    
    /**
    * listDeploymentRequest
    * @method
    * @name API#listDeploymentRequest
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param integer status - status 
    
    * @param string title - title 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listDeploymentRequestUsingGET ( parameters : {
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      'status'  ?: number,
      'title'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfDeploymentRequestDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deployment/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;
      config.params['status'] = parameters.status;
      config.params['title'] = parameters.title;   
      return axios.request( config );
    }
    
    /**
    * createDeploymentRequest
    * @method
    * @name API#createDeploymentRequest
    
    * @param string id - id 
    
    * @param  postDto - postDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createDeploymentRequestUsingPUT ( parameters : {
      'id'  : string,
      'postDto'  : DeploymentRequestPostDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDeploymentRequestDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deployment/update/{id}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.data = parameters.postDto;   
      return axios.request( config );
    }
    
    /**
    * withdrawDeploymentRequest
    * @method
    * @name API#withdrawDeploymentRequest
    
    * @param  actionDto - actionDTO 
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    withdrawDeploymentRequestUsingPOST ( parameters : {
      'actionDto'  : DeploymentRequestActionDTO,
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfDeploymentRequestDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/deployment/withdraw/{id}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.actionDto;
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Diction Controller
 * @class DictionAPI
 */
export class DictionAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string dataCode - dataCode 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_1 ( parameters : {
      'dataCode'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<Diction> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/diction/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['dataCode'] = parameters.dataCode;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Basic Error Controller
 * @class BasicErrorAPI
 */
export class BasicErrorAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
         
      return axios.request( config );
    }
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingHEAD ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'HEAD'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
      config.headers['Content-Type'] = 'application/json';
         
      return axios.request( config );
    }
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingPOST ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
      config.headers['Content-Type'] = 'application/json';
         
      return axios.request( config );
    }
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingPUT ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
      config.headers['Content-Type'] = 'application/json';
         
      return axios.request( config );
    }
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingDELETE ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
         
      return axios.request( config );
    }
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingOPTIONS ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'OPTIONS'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
      config.headers['Content-Type'] = 'application/json';
         
      return axios.request( config );
    }
    
    /**
    * errorHtml
    * @method
    * @name API#errorHtml
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    errorHtmlUsingPATCH ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ModelAndView> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/error',
        method: 'PATCH'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'text/html';
      config.headers['Content-Type'] = 'application/json';
         
      return axios.request( config );
    }
  

}

  

// start 
/**
 * File Upload Controller
 * @class FileUploadAPI
 */
export class FileUploadAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * download
    * @method
    * @name API#download
    
    * @param string appendixName - appendixName 
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    downloadUsingGET ( parameters : {
      'appendixName'  ?: string,
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/download',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['appendixName'] = parameters.appendixName;
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingGET ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingHEAD ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'HEAD'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingPOST ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingPUT ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingDELETE ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingOPTIONS ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'OPTIONS'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * showImage
    * @method
    * @name API#showImage
    
    * @param string appendixPath - appendixPath 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    showImageUsingPATCH ( parameters : {
      'appendixPath'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/showImage',
        method: 'PATCH'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = 'image/jpeg';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['appendixPath'] = parameters.appendixPath;   
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingGET ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingHEAD ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'HEAD'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPOST_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPUT ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingDELETE ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingOPTIONS ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'OPTIONS'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPATCH ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/file/upload',
        method: 'PATCH'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Guild Controller
 * @class GuildAPI
 */
export class GuildAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * guildList
    * @method
    * @name API#guildList
    
    * @param string key - key 
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param integer type - type 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    guildListUsingGET ( parameters : {
      'key'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'type'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfGuild> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/guild/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['key'] = parameters.key;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['type'] = parameters.type;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_2 ( parameters : {
      'id'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<Guild> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/guild/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['id'] = parameters.id;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Label Controller
 * @class LabelAPI
 */
export class LabelAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * labelList
    * @method
    * @name API#labelList
    
    * @param integer labelType - labelType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    labelListUsingGET ( parameters : {
      'labelType'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfLabel> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/label/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['labelType'] = parameters.labelType;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string labelId - labelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_3 ( parameters : {
      'labelId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<Label> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/label/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['labelId'] = parameters.labelId;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 标注方式管理接口
 * @class MarkModelAPI
 */
export class MarkModelAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取一个标注方式的配置信息
    * @method
    * @name API#获取一个标注方式的配置信息
    
    * @param string batchId - batchId 
    
    * @param string markTaskId - markTaskId 
    
    * @param string medalId - medalId 
    
    * @param string taskId - taskId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getModelEntyByOtherUsingGET ( parameters : {
      'batchId'  ?: string,
      'markTaskId'  ?: string,
      'medalId'  ?: string,
      'taskId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['batchId'] = parameters.batchId;
      config.params['markTaskId'] = parameters.markTaskId;
      config.params['medalId'] = parameters.medalId;
      config.params['taskId'] = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * 新增或更新一个标注方式
    * @method
    * @name API#新增或更新一个标注方式
    
    * @param  model - model 
    
    * @param string modelId - modelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveMarkConfigUsingPOST ( parameters : {
      'model'  : MarkConfig,
      'modelId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.model;
      config.params['modelId'] = parameters.modelId;   
      return axios.request( config );
    }
    
    /**
    * 获取所有标注方式列表
    * @method
    * @name API#获取所有标注方式列表
    
    * @param string modelType - modelType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getConfigListUsingGET ( parameters : {
      'modelType'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/list/{modelType}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{modelType}',parameters.modelType+'');   
      return axios.request( config );
    }
    
    /**
    * 查询所有标注节点模板
    * @method
    * @name API#查询所有标注节点模板
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getTaskStepTemplateListUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/tasksteptemplate/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 获取一个标注方式的配置信息
    * @method
    * @name API#获取一个标注方式的配置信息
    
    * @param string modelId - modelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getModelEntryUsingGET ( parameters : {
      'modelId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/{modelId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');   
      return axios.request( config );
    }
    
    /**
    * 修改标注方式状态
    * @method
    * @name API#修改标注方式状态
    
    * @param string modelId - modelId 
    
    * @param string status - status 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    changeMarkModelStatusUsingPOST ( parameters : {
      'modelId'  : string,
      'status'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/{modelId}/status/{status}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');
      config.url = config.url.replace('{status}',parameters.status+'');   
      return axios.request( config );
    }
    
    /**
    * 新增一个标注方式的视图
    * @method
    * @name API#新增一个标注方式的视图
    
    * @param string modelId - modelId 
    
    * @param  view - view 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveViewUsingPOST ( parameters : {
      'modelId'  : string,
      'view'  : ViewConfig,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/{modelId}/view',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');
      config.data = parameters.view;   
      return axios.request( config );
    }
    
    /**
    * 查看一个标注方式视图版本
    * @method
    * @name API#查看一个标注方式视图版本
    
    * @param string modelId - modelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getHistorysListUsingGET ( parameters : {
      'modelId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/{modelId}/view/history',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');   
      return axios.request( config );
    }
    
    /**
    * 保存
    * @method
    * @name API#保存
    
    * @param string modelId - modelId 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    setModelViewVersionUsingPOST ( parameters : {
      'modelId'  : string,
      'version'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-model/{modelId}/view/{version}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');
      config.url = config.url.replace('{version}',parameters.version+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Mark Template Controller
 * @class MarkTemplateAPI
 */
export class MarkTemplateAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createMarkTemplate
    * @method
    * @name API#createMarkTemplate
    
    * @param string templateId - templateId 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createMarkTemplateUsingPOST ( parameters : {
      'templateId'  : string,
      'version'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMarkTemplateDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/copy/{templateId}/{version}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{templateId}',parameters.templateId+'');
      config.url = config.url.replace('{version}',parameters.version+'');   
      return axios.request( config );
    }
    
    /**
    * createMarkTemplate
    * @method
    * @name API#createMarkTemplate
    
    * @param  createDto - createDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createMarkTemplateUsingPOST_2 ( parameters : {
      'createDto'  : MarkTemplateRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMarkTemplateDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.createDto;   
      return axios.request( config );
    }
    
    /**
    * createMarkTemplate
    * @method
    * @name API#createMarkTemplate
    
    * @param  createDto - createDTO 
    
    * @param string templateId - templateId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createMarkTemplateUsingPOST_1 ( parameters : {
      'createDto'  : MarkTemplateVersionRequestDTO,
      'templateId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMarkTemplateVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/createVersion/{templateId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.createDto;
      config.url = config.url.replace('{templateId}',parameters.templateId+'');   
      return axios.request( config );
    }
    
    /**
    * delTemplate
    * @method
    * @name API#delTemplate
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    delTemplateUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/del/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * delTemplate
    * @method
    * @name API#delTemplate
    
    * @param string templateId - templateId 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    delTemplateUsingDELETE_1 ( parameters : {
      'templateId'  : string,
      'version'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/delVersion/{templateId}/{version}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{templateId}',parameters.templateId+'');
      config.url = config.url.replace('{version}',parameters.version+'');   
      return axios.request( config );
    }
    
    /**
    * listMarkTempates
    * @method
    * @name API#listMarkTempates
    
    * @param string id - id 
    
    * @param string name - name 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listMarkTempatesUsingGET_1 ( parameters : {
      'id'  ?: string,
      'name'  ?: string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfMarkTemplateDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['id'] = parameters.id;
      config.params['name'] = parameters.name;
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;   
      return axios.request( config );
    }
    
    /**
    * listMarkTempates
    * @method
    * @name API#listMarkTempates
    
    * @param string env - env 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param string templateId - templateId 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listMarkTempatesUsingGET ( parameters : {
      'env'  ?: string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      'templateId'  : string,
      'version'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfMarkTemplateVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/listVersion/{templateId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['env'] = parameters.env;
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;
      config.url = config.url.replace('{templateId}',parameters.templateId+'');
      config.params['version'] = parameters.version;   
      return axios.request( config );
    }
    
    /**
    * updateMarkTemplate
    * @method
    * @name API#updateMarkTemplate
    
    * @param string id - id 
    
    * @param  updateDto - updateDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateMarkTemplateUsingPUT ( parameters : {
      'id'  : string,
      'updateDto'  : MarkTemplateRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMarkTemplateDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/update/{id}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.data = parameters.updateDto;   
      return axios.request( config );
    }
    
    /**
    * updateMarkTemplate
    * @method
    * @name API#updateMarkTemplate
    
    * @param string templateId - templateId 
    
    * @param  updateDto - updateDTO 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateMarkTemplateUsingPUT_1 ( parameters : {
      'templateId'  : string,
      'updateDto'  : MarkTemplateVersionRequestDTO,
      'version'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMarkTemplateVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/updateVersion/{templateId}/{version}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{templateId}',parameters.templateId+'');
      config.data = parameters.updateDto;
      config.url = config.url.replace('{version}',parameters.version+'');   
      return axios.request( config );
    }
    
    /**
    * versionDetail
    * @method
    * @name API#versionDetail
    
    * @param string templateId - templateId 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    versionDetailUsingGET ( parameters : {
      'templateId'  : string,
      'version'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMarkTemplateVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark-template/versionDetail/{templateId}/{version}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{templateId}',parameters.templateId+'');
      config.url = config.url.replace('{version}',parameters.version+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Menu Controller
 * @class MenuAPI
 */
export class MenuAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createRole
    * @method
    * @name API#createRole
    
    * @param  menu - menu 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createRoleUsingPOST ( parameters : {
      'menu'  : Menu,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.menu;   
      return axios.request( config );
    }
    
    /**
    * deleteRole
    * @method
    * @name API#deleteRole
    
    * @param string menuId - menuId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteRoleUsingDELETE ( parameters : {
      'menuId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/delete',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['menuId'] = parameters.menuId;   
      return axios.request( config );
    }
    
    /**
    * list
    * @method
    * @name API#list
    
    * @param string menuName - menuName 
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listUsingGET_1 ( parameters : {
      'menuName'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfMenu> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['menuName'] = parameters.menuName;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;   
      return axios.request( config );
    }
    
    /**
    * menuList
    * @method
    * @name API#menuList
    
    * @param string roleId - roleId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    menuListUsingGET ( parameters : {
      'roleId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfTreeMenuVo> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/menuTree',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['roleId'] = parameters.roleId;   
      return axios.request( config );
    }
    
    /**
    * queryListByOpenId
    * @method
    * @name API#queryListByOpenId
    
    * @param integer platformType - platformType 
    
    * @param string userId - userId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    queryListByOpenIdUsingGET ( parameters : {
      'platformType'  ?: number,
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfMenu> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/queryListByOpenId',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['platformType'] = parameters.platformType;
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
    
    /**
    * queryListByRoleName
    * @method
    * @name API#queryListByRoleName
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    queryListByRoleNameUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfTreeMenuVo> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/queryListByRoleName',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * updateRole
    * @method
    * @name API#updateRole
    
    * @param  menu - menu 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateRoleUsingPUT_1 ( parameters : {
      'menu'  : Menu,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.menu;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string menuId - menuId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_4 ( parameters : {
      'menuId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<Menu> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/menu/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['menuId'] = parameters.menuId;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Open Controller
 * @class OpenAPI
 */
export class OpenAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createAppVersion
    * @method
    * @name API#createAppVersion
    
    * @param string appId - appId 
    
    * @param  createDto - createDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createAppVersionUsingPOST ( parameters : {
      'appId'  : string,
      'createDto'  : AppVersionRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/app-version/create/{appId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.data = parameters.createDto;   
      return axios.request( config );
    }
    
    /**
    * getAppLatestCommit
    * @method
    * @name API#getAppLatestCommit
    
    * @param string appId - appId 
    
    * @param string branch - branch 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAppLatestCommitUsingGET ( parameters : {
      'appId'  : string,
      'branch'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/app-version/latest-commit/{appId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.params['branch'] = parameters.branch;   
      return axios.request( config );
    }
    
    /**
    * updateDeployLog
    * @method
    * @name API#updateDeployLog
    
    * @param string commitId - commitId 
    
    * @param string envId - envId 
    
    * @param  logRequestDto - logRequestDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateDeployLogUsingPOST ( parameters : {
      'commitId'  : string,
      'envId'  : string,
      'logRequestDto'  : DeployLogRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/deployment/log/{envId}/{commitId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{commitId}',parameters.commitId+'');
      config.url = config.url.replace('{envId}',parameters.envId+'');
      config.data = parameters.logRequestDto;   
      return axios.request( config );
    }
    
    /**
    * 获取一个标注方式的配置信息
    * @method
    * @name API#获取一个标注方式的配置信息
    
    * @param string batchId - batchId 
    
    * @param string markTaskId - markTaskId 
    
    * @param string medalId - medalId 
    
    * @param string taskId - taskId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getModelEntyByOtherUsingGET_1 ( parameters : {
      'batchId'  ?: string,
      'markTaskId'  ?: string,
      'medalId'  ?: string,
      'taskId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['batchId'] = parameters.batchId;
      config.params['markTaskId'] = parameters.markTaskId;
      config.params['medalId'] = parameters.medalId;
      config.params['taskId'] = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * 新增或更新一个标注方式
    * @method
    * @name API#新增或更新一个标注方式
    
    * @param  model - model 
    
    * @param string modelId - modelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveMarkConfigUsingPOST_1 ( parameters : {
      'model'  : MarkConfig,
      'modelId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.model;
      config.params['modelId'] = parameters.modelId;   
      return axios.request( config );
    }
    
    /**
    * 获取所有标注方式列表
    * @method
    * @name API#获取所有标注方式列表
    
    * @param string modelType - modelType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getConfigListUsingGET_1 ( parameters : {
      'modelType'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model/list/{modelType}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{modelType}',parameters.modelType+'');   
      return axios.request( config );
    }
    
    /**
    * uploadStaticResource
    * @method
    * @name API#uploadStaticResource
    
    * @param integer buildNumber - buildNumber 
    
    * @param string bus - bus 
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadStaticResourceUsingPOST ( parameters : {
      'buildNumber'  : number,
      'bus'  : string,
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model/uploadStatic/{bus}/{buildNumber}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
      config.url = config.url.replace('{buildNumber}',parameters.buildNumber+'');
      config.url = config.url.replace('{bus}',parameters.bus+'');
         
      return axios.request( config );
    }
    
    /**
    * 获取一个标注方式的配置信息
    * @method
    * @name API#获取一个标注方式的配置信息
    
    * @param string modelId - modelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getModelEntryUsingGET_1 ( parameters : {
      'modelId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model/{modelId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');   
      return axios.request( config );
    }
    
    /**
    * 新增一个标注方式的视图
    * @method
    * @name API#新增一个标注方式的视图
    
    * @param string modelId - modelId 
    
    * @param  view - view 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveViewUsingPOST_1 ( parameters : {
      'modelId'  : string,
      'view'  : ViewConfig,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model/{modelId}/view',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');
      config.data = parameters.view;   
      return axios.request( config );
    }
    
    /**
    * 查看一个标注方式视图版本
    * @method
    * @name API#查看一个标注方式视图版本
    
    * @param string modelId - modelId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getHistorysListUsingGET_1 ( parameters : {
      'modelId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model/{modelId}/view/history',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');   
      return axios.request( config );
    }
    
    /**
    * 保存
    * @method
    * @name API#保存
    
    * @param string modelId - modelId 
    
    * @param integer version - version 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    setModelViewVersionUsingPOST_1 ( parameters : {
      'modelId'  : string,
      'version'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/mark-model/{modelId}/view/{version}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{modelId}',parameters.modelId+'');
      config.url = config.url.replace('{version}',parameters.version+'');   
      return axios.request( config );
    }
    
    /**
    * 启动工作流作业接口
    * @method
    * @name API#启动工作流作业接口
    
    * @param  execConfig - execConfig 
    
    * @param string pipelineId - pipelineId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    startPipelineJobUsingPOST ( parameters : {
      'execConfig'  ?: string,
      'pipelineId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/pipeline-jobs/exec/{pipelineId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.execConfig;
      config.url = config.url.replace('{pipelineId}',parameters.pipelineId+'');   
      return axios.request( config );
    }
    
    /**
    * 获取工作流作业接口
    * @method
    * @name API#获取工作流作业接口
    
    * @param string jobId - jobId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineJobUsingGET ( parameters : {
      'jobId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/pipeline-jobs/{jobId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{jobId}',parameters.jobId+'');   
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingGET_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingHEAD_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'HEAD'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPOST_2 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPUT_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingDELETE_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingOPTIONS_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'OPTIONS'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
    
    /**
    * upload
    * @method
    * @name API#upload
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    uploadUsingPATCH_1 ( parameters : {
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfMapOfstringAndstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/open/upload',
        method: 'PATCH'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
         
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 工作流作业相关接口
 * @class PipelinejobAPI
 */
export class PipelinejobAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取所有工作流作业接口
    * @method
    * @name API#获取所有工作流作业接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllPipelineJobsUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 编辑工作流作业接口
    * @method
    * @name API#编辑工作流作业接口
    
    * @param  pipelineJob - pipelineJob 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updatePipelineJobUsingPUT ( parameters : {
      'pipelineJob'  : PipelineJob,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipelineJob;   
      return axios.request( config );
    }
    
    /**
    * 启动定时任务工作流作业接口
    * @method
    * @name API#启动定时任务工作流作业接口
    
    * @param  params - params 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createTimingPipelineUsingPOST ( parameters : {
      'params'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs/create-timingrun',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.params;   
      return axios.request( config );
    }
    
    /**
    * 启动工作流作业接口
    * @method
    * @name API#启动工作流作业接口
    
    * @param  execConfig - execConfig 
    
    * @param string pipelineId - pipelineId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    startPipelineJobUsingPOST_1 ( parameters : {
      'execConfig'  ?: string,
      'pipelineId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs/exec/{pipelineId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.execConfig;
      config.url = config.url.replace('{pipelineId}',parameters.pipelineId+'');   
      return axios.request( config );
    }
    
    /**
    * 从指定节点重启工作流
    * @method
    * @name API#从指定节点重启工作流
    
    * @param string pipelineId - pipelineId 
    
    * @param string pipelineJobId - pipelineJobId 
    
    * @param string startNodeId - startNodeId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    restartPipelineJobUsingGET ( parameters : {
      'pipelineId'  : string,
      'pipelineJobId'  : string,
      'startNodeId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs/restart/{pipelineId}/{pipelineJobId}/{startNodeId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{pipelineId}',parameters.pipelineId+'');
      config.url = config.url.replace('{pipelineJobId}',parameters.pipelineJobId+'');
      config.url = config.url.replace('{startNodeId}',parameters.startNodeId+'');   
      return axios.request( config );
    }
    
    /**
    * 删除工作流作业接口
    * @method
    * @name API#删除工作流作业接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deletePipelineJobUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ResponseBody> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 获取工作流作业接口
    * @method
    * @name API#获取工作流作业接口
    
    * @param string jobId - jobId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineJobUsingGET_1 ( parameters : {
      'jobId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-jobs/{jobId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{jobId}',parameters.jobId+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 工作流任务相关接口
 * @class PipelinetasknodeAPI
 */
export class PipelinetasknodeAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取所有工作流任务接口
    * @method
    * @name API#获取所有工作流任务接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllPipelineTasksUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 创建工作流节点接口
    * @method
    * @name API#创建工作流节点接口
    
    * @param  pipelineTaskNode - pipelineTaskNode 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createPipelineTaskUsingPOST_1 ( parameters : {
      'pipelineTaskNode'  : PipelineTaskNode,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipelineTaskNode;   
      return axios.request( config );
    }
    
    /**
    * 编辑工作流任务接口
    * @method
    * @name API#编辑工作流任务接口
    
    * @param  pipelineTaskNode - pipelineTaskNode 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updatePipelineTaskUsingPUT ( parameters : {
      'pipelineTaskNode'  : PipelineTaskNode,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipelineTaskNode;   
      return axios.request( config );
    }
    
    /**
    * 获取工作流任务接口
    * @method
    * @name API#获取工作流任务接口
    
    * @param string pipelineId - pipelineId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineTaskByPipelineUsingGET ( parameters : {
      'pipelineId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks/pipeline/{pipelineId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{pipelineId}',parameters.pipelineId+'');   
      return axios.request( config );
    }
    
    /**
    * 编辑工作流任务接口
    * @method
    * @name API#编辑工作流任务接口
    
    * @param  pipelineTaskRenameReq - pipelineTaskRenameReq 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    renamePipelineTaskUsingPUT ( parameters : {
      'pipelineTaskRenameReq'  : PipelineTaskRenameReq,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks/rename',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipelineTaskRenameReq;   
      return axios.request( config );
    }
    
    /**
    * 创建工作流节点接口
    * @method
    * @name API#创建工作流节点接口
    
    * @param  pipelineTaskAddByTaskNodeReq - pipelineTaskAddByTaskNodeReq 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createPipelineTaskUsingPOST ( parameters : {
      'pipelineTaskAddByTaskNodeReq'  : PipelineTaskAddByTaskNodeReq,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks/tasknode',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipelineTaskAddByTaskNodeReq;   
      return axios.request( config );
    }
    
    /**
    * 获取工作流任务接口
    * @method
    * @name API#获取工作流任务接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineTaskUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 删除工作流任务接口
    * @method
    * @name API#删除工作流任务接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deletePipelineTaskUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipeline-tasks/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 工作流相关接口
 * @class PipelineAPI
 */
export class PipelineAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 查询所有工作流接口
    * @method
    * @name API#查询所有工作流接口
    
    * @param string name -  
    
    * @param integer pageIndex -  
    
    * @param integer pageSize -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllPipelinesUsingGET ( parameters : {
      'name'  ?: string,
      'pageIndex'  ?: number,
      'pageSize'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['name'] = parameters.name;
      config.params['pageIndex'] = parameters.pageIndex;
      config.params['pageSize'] = parameters.pageSize;   
      return axios.request( config );
    }
    
    /**
    * 工作流创建接口
    * @method
    * @name API#工作流创建接口
    
    * @param  pipeline - pipeline 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createPipelineUsingPOST ( parameters : {
      'pipeline'  : Pipeline,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ResponseEntity> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipeline;   
      return axios.request( config );
    }
    
    /**
    * 工作流编辑接口
    * @method
    * @name API#工作流编辑接口
    
    * @param  pipeline - pipeline 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updatePipelineUsingPUT ( parameters : {
      'pipeline'  : Pipeline,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipeline;   
      return axios.request( config );
    }
    
    /**
    * 复制工作流
    * @method
    * @name API#复制工作流
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    copyPipelineUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/copy/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 获取最新的pipelinejob
    * @method
    * @name API#获取最新的pipelinejob
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getLastPipelineJobUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/lastjob/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 查询工作流任务日志接口
    * @method
    * @name API#查询工作流任务日志接口
    
    * @param string pipelineJobId - pipelineJobId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineJobLogsUsingGET ( parameters : {
      'pipelineJobId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/logs/{pipelineJobId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{pipelineJobId}',parameters.pipelineJobId+'');   
      return axios.request( config );
    }
    
    /**
    * 查询所有工作流按天统计数据量接口
    * @method
    * @name API#查询所有工作流按天统计数据量接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllPipelinesByDayNumUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/num',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 查询工作流的所有任务接口
    * @method
    * @name API#查询工作流的所有任务接口
    
    * @param integer pageIndex -  
    
    * @param integer pageSize -  
    
    * @param string pipelineId -  
    
    * @param integer pipelineJobFt -  
    
    * @param integer pipelineJobSt -  
    
    * @param string pipelineJobStatus -  
    
    * @param string pipelineName -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineJobsUsingGET ( parameters : {
      'pageIndex'  ?: number,
      'pageSize'  ?: number,
      'pipelineId'  ?: string,
      'pipelineJobFt'  ?: number,
      'pipelineJobSt'  ?: number,
      'pipelineJobStatus'  ?: string,
      'pipelineName'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/pipeline-jobs',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['pageIndex'] = parameters.pageIndex;
      config.params['pageSize'] = parameters.pageSize;
      config.params['pipelineId'] = parameters.pipelineId;
      config.params['pipelineJobFt'] = parameters.pipelineJobFt;
      config.params['pipelineJobSt'] = parameters.pipelineJobSt;
      config.params['pipelineJobStatus'] = parameters.pipelineJobStatus;
      config.params['pipelineName'] = parameters.pipelineName;   
      return axios.request( config );
    }
    
    /**
    * 停止运行的工作流任务
    * @method
    * @name API#停止运行的工作流任务
    
    * @param string pipelineId - pipelineId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    stopPipelineJobUsingGET ( parameters : {
      'pipelineId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/stop/{pipelineId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{pipelineId}',parameters.pipelineId+'');   
      return axios.request( config );
    }
    
    /**
    * 查询工作流任务节点个数倒序topN
    * @method
    * @name API#查询工作流任务节点个数倒序topN
    
    * @param integer num - num 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelinesByTaskNodeNumTOPnUsingGET ( parameters : {
      'num'  : number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<object> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/taskNodeNum/top/{num}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{num}',parameters.num+'');   
      return axios.request( config );
    }
    
    /**
    * 查询工作流接口
    * @method
    * @name API#查询工作流接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getPipelineUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 工作流删除接口
    * @method
    * @name API#工作流删除接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deletePipelineUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 导入工作流
    * @method
    * @name API#导入工作流
    
    * @param string id - id 
    
    * @param string srcId - srcId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    importPipelineUsingGET ( parameters : {
      'id'  : string,
      'srcId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/pipelines/{id}/import/{srcId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.url = config.url.replace('{srcId}',parameters.srcId+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 工作流任务分类接口
 * @class PipelinetaskcategoryAPI
 */
export class PipelinetaskcategoryAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取所有工作流任务分类接口
    * @method
    * @name API#获取所有工作流任务分类接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllTaskCategoriesUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-categories',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 创建工作流任务分类接口
    * @method
    * @name API#创建工作流任务分类接口
    
    * @param  taskCategory - taskCategory 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createTaskCategoryUsingPOST ( parameters : {
      'taskCategory'  : TaskCategory,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-categories',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.taskCategory;   
      return axios.request( config );
    }
    
    /**
    * 编辑工作流任务分类接口
    * @method
    * @name API#编辑工作流任务分类接口
    
    * @param  taskCategory - taskCategory 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateTaskCategoryUsingPUT ( parameters : {
      'taskCategory'  : TaskCategory,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-categories',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.taskCategory;   
      return axios.request( config );
    }
    
    /**
    * 获取工作流任务分类接口
    * @method
    * @name API#获取工作流任务分类接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getTaskCategoryUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-categories/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 删除工作流任务分类接口
    * @method
    * @name API#删除工作流任务分类接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteTaskCategoryUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-categories/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 工作流任务节点相关接口
 * @class PiplelinetasknodeAPI
 */
export class PiplelinetasknodeAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取所有工作流任务节点接口
    * @method
    * @name API#获取所有工作流任务节点接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllTaskNodesUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-nodes',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 创建工作流任务节点接口
    * @method
    * @name API#创建工作流任务节点接口
    
    * @param  taskNode - taskNode 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createTaskNodeUsingPOST ( parameters : {
      'taskNode'  : TaskNode,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ResponseEntity> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-nodes',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.taskNode;   
      return axios.request( config );
    }
    
    /**
    * 编辑工作流任务节点接口
    * @method
    * @name API#编辑工作流任务节点接口
    
    * @param  taskNode - taskNode 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateTaskNodeUsingPUT ( parameters : {
      'taskNode'  : TaskNode,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-nodes',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.taskNode;   
      return axios.request( config );
    }
    
    /**
    * 获取工作流任务节点接口
    * @method
    * @name API#获取工作流任务节点接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getTaskNodeUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-nodes/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 删除工作流任务节点接口
    * @method
    * @name API#删除工作流任务节点接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteTaskNodeUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-nodes/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 创建自定义节点为可复用节点
    * @method
    * @name API#创建自定义节点为可复用节点
    
    * @param  pipelineTask2TaskNodeReq - pipelineTask2TaskNodeReq 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    pipelineTask2taskNodeUsingPOST ( parameters : {
      'pipelineTask2TaskNodeReq'  : PipelineTask2TaskNodeReq,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/tasknode/pipeline-tasks',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.pipelineTask2TaskNodeReq;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * 工作流任务类型相关接口
 * @class PipelinetasktypeAPI
 */
export class PipelinetasktypeAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取所有工作流任务类型接口
    * @method
    * @name API#获取所有工作流任务类型接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAllTaskTypesUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-types',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 创建工作流任务类型接口
    * @method
    * @name API#创建工作流任务类型接口
    
    * @param  taskType - taskType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createTaskTypeUsingPOST ( parameters : {
      'taskType'  : TaskType,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-types',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.taskType;   
      return axios.request( config );
    }
    
    /**
    * 编辑工作流任务类型接口
    * @method
    * @name API#编辑工作流任务类型接口
    
    * @param  taskType - taskType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateTaskTypeUsingPUT ( parameters : {
      'taskType'  : TaskType,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-types',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.taskType;   
      return axios.request( config );
    }
    
    /**
    * 获取工作流任务类型接口
    * @method
    * @name API#获取工作流任务类型接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getTaskTypeUsingGET ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-types/{id}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 删除工作流任务类型接口
    * @method
    * @name API#删除工作流任务类型接口
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteTaskTypeUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/pipeline/task-types/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Prototype App Version Controller
 * @class PrototypeAppVersionAPI
 */
export class PrototypeAppVersionAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createAppVersion
    * @method
    * @name API#createAppVersion
    
    * @param string appId - appId 
    
    * @param string changeLog - changeLog 
    
    * @param file file - file 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createAppVersionUsingPOST_1 ( parameters : {
      'appId'  : string,
      'changeLog'  : string,
      'file'  : object,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPrototypeAppVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/prototype-app-version/create/{appId}',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'multipart/form-data';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.params['changeLog'] = parameters.changeLog;
         
      return axios.request( config );
    }
    
    /**
    * listApps
    * @method
    * @name API#listApps
    
    * @param string appId - appId 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listAppsUsingGET_3 ( parameters : {
      'appId'  : string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfPrototypeAppVersionDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/prototype-app-version/list/{appId}',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{appId}',parameters.appId+'');
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Prototype App Controller
 * @class PrototypeAppAPI
 */
export class PrototypeAppAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createApp
    * @method
    * @name API#createApp
    
    * @param  createDto - createDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createAppUsingPOST_1 ( parameters : {
      'createDto'  : PrototypeAppRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPrototypeAppDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/prototype-app/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.createDto;   
      return axios.request( config );
    }
    
    /**
    * delApp
    * @method
    * @name API#delApp
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    delAppUsingDELETE_1 ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/prototype-app/del/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * listApps
    * @method
    * @name API#listApps
    
    * @param string name - name 
    
    * @param integer page - Page number of the requested page 
    
    * @param integer size - Size of a page 
    
    * @param array sort - Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listAppsUsingGET_2 ( parameters : {
      'name'  ?: string,
      'page'  ?: number,
      'size'  ?: number,
      'sort'  ?: Array<undefined>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<PageDataResponseOfPrototypeAppDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/prototype-app/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['name'] = parameters.name;
      config.params['page'] = parameters.page;
      config.params['size'] = parameters.size;
      config.params['sort'] = parameters.sort;   
      return axios.request( config );
    }
    
    /**
    * updateApp
    * @method
    * @name API#updateApp
    
    * @param string id - id 
    
    * @param  updateDto - updateDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateAppUsingPUT_1 ( parameters : {
      'id'  : string,
      'updateDto'  : PrototypeAppRequestDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPrototypeAppDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/prototype-app/update/{id}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.data = parameters.updateDto;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Role Controller
 * @class RoleAPI
 */
export class RoleAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createRole
    * @method
    * @name API#createRole
    
    * @param  role - role 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createRoleUsingPOST_1 ( parameters : {
      'role'  : Role,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/role/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.role;   
      return axios.request( config );
    }
    
    /**
    * deleteRole
    * @method
    * @name API#deleteRole
    
    * @param string roleId - roleId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteRoleUsingDELETE_1 ( parameters : {
      'roleId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/role/delete',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['roleId'] = parameters.roleId;   
      return axios.request( config );
    }
    
    /**
    * list
    * @method
    * @name API#list
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param integer platformType - platformType 
    
    * @param string roleName - roleName 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listUsingGET_2 ( parameters : {
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'platformType'  ?: number,
      'roleName'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfRole> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/role/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['platformType'] = parameters.platformType;
      config.params['roleName'] = parameters.roleName;   
      return axios.request( config );
    }
    
    /**
    * queryListByOpenId
    * @method
    * @name API#queryListByOpenId
    
    * @param string openId - openId 
    
    * @param integer platformType - platformType 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    queryListByOpenIdUsingGET_1 ( parameters : {
      'openId'  : string,
      'platformType'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfRole> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/role/queryListByOpenId',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['openId'] = parameters.openId;
      config.params['platformType'] = parameters.platformType;   
      return axios.request( config );
    }
    
    /**
    * queryRoleListByLogin
    * @method
    * @name API#queryRoleListByLogin
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    queryRoleListByLoginUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/role/queryRoleListByLogin',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * updateRole
    * @method
    * @name API#updateRole
    
    * @param  role - role 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateRoleUsingPUT_2 ( parameters : {
      'role'  : Role,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfRole> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/role/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.role;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Role Menu Controller
 * @class RoleMenuAPI
 */
export class RoleMenuAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * updateRoleMenu
    * @method
    * @name API#updateRoleMenu
    
    * @param string roleId - roleId 
    
    * @param  roleMenuList - roleMenuList 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateRoleMenuUsingPOST ( parameters : {
      'roleId'  ?: string,
      'roleMenuList'  : Array<RoleMenu>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/roleMenu/update',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['roleId'] = parameters.roleId;
      config.data = parameters.roleMenuList;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string roleId - roleId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_5 ( parameters : {
      'roleId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<RoleMenu> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/roleMenu/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['roleId'] = parameters.roleId;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Sub Team Controller
 * @class SubTeamAPI
 */
export class SubTeamAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * querySubTeamByName
    * @method
    * @name API#querySubTeamByName
    
    * @param string action - action 
    
    * @param string name - name 
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    querySubTeamByNameUsingGET ( parameters : {
      'action'  ?: string,
      'name'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfSubTeamVo> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/subTeam/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['action'] = parameters.action;
      config.params['name'] = parameters.name;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Team Manager Team Controller
 * @class TeamManagerTeamAPI
 */
export class TeamManagerTeamAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * saveTeam
    * @method
    * @name API#saveTeam
    
    * @param  teamManagerTeam - teamManagerTeam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveTeamUsingPOST ( parameters : {
      'teamManagerTeam'  : TeamManagerTeam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/teamManagerTeam/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.teamManagerTeam;   
      return axios.request( config );
    }
    
    /**
    * querySubTeamByName
    * @method
    * @name API#querySubTeamByName
    
    * @param string action - action 
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param string teamName - teamName 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    querySubTeamByNameUsingGET_1 ( parameters : {
      'action'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'teamName'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfSubTeamVo> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/teamManagerTeam/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['action'] = parameters.action;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['teamName'] = parameters.teamName;   
      return axios.request( config );
    }
    
    /**
    * updateTeam
    * @method
    * @name API#updateTeam
    
    * @param  teamManagerTeam - teamManagerTeam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateTeamUsingPUT ( parameters : {
      'teamManagerTeam'  : TeamManagerTeam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/teamManagerTeam/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.teamManagerTeam;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_6 ( parameters : {
      'id'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<TeamManagerTeam> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/teamManagerTeam/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['id'] = parameters.id;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * Theme Controller
 * @class ThemeAPI
 */
export class ThemeAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * insertTheme
    * @method
    * @name API#insertTheme
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    insertThemeUsingPOST ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfTheme> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/theme/insert',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
         
      return axios.request( config );
    }
    
    /**
    * updateTheme
    * @method
    * @name API#updateTheme
    
    * @param  theme - theme 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateThemeUsingPUT ( parameters : {
      'theme'  : Theme,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfTheme> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/theme/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.theme;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_7 ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfTheme> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/theme/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
  

}

  

// start 
/**
 * User Controller
 * @class UserAPI
 */
export class UserAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 获取用户权限接口
    * @method
    * @name API#获取用户权限接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAccountAuthoritiesUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/account-info/authorities',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 获取用户信息接口
    * @method
    * @name API#获取用户信息接口
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAccountMessageUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/account-info/get',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * 用户登录接口
    * @method
    * @name API#用户登录接口
    
    * @param  cookieReq - cookieReq 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    addCookieUsingPOST ( parameters : {
      'cookieReq'  : CookieReq,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<LoginResp> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/add_cookie',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.cookieReq;   
      return axios.request( config );
    }
    
    /**
    * getAuthorities
    * @method
    * @name API#getAuthorities
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAuthoritiesUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfListOfstring> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/authorities',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * getAuthorization
    * @method
    * @name API#getAuthorization
    
    * @param string login - login 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getAuthorizationUsingGET ( parameters : {
      'login'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<LoginResp> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/authorization',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['login'] = parameters.login;   
      return axios.request( config );
    }
    
    /**
    * 用户修改密码接口
    * @method
    * @name API#用户修改密码接口
    
    * @param  changePwdReqParam - changePwdReqParam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    changePwdUsingPOST_1 ( parameters : {
      'changePwdReqParam'  : ChangePwdReqParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/change-password',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.changePwdReqParam;   
      return axios.request( config );
    }
    
    /**
    * createUser
    * @method
    * @name API#createUser
    
    * @param  userDto - userDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createUserUsingPOST ( parameters : {
      'userDto'  : UserUpdateDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfUserDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.userDto;   
      return axios.request( config );
    }
    
    /**
    * deleteUser
    * @method
    * @name API#deleteUser
    
    * @param string id - id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteUserUsingDELETE ( parameters : {
      'id'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/del/{id}',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{id}',parameters.id+'');   
      return axios.request( config );
    }
    
    /**
    * 用户登录接口
    * @method
    * @name API#用户登录接口
    
    * @param  loginReqParam - loginReqParam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    loginUsingPOST ( parameters : {
      'loginReqParam'  : LoginReqParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<LoginResp> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/login',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.loginReqParam;   
      return axios.request( config );
    }
    
    /**
    * updateUser
    * @method
    * @name API#updateUser
    
    * @param string id - id 
    
    * @param  userDto - userDTO 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateUserUsingPUT ( parameters : {
      'id'  : string,
      'userDto'  : UserUpdateDTO,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfUserDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/user/update/{id}',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{id}',parameters.id+'');
      config.data = parameters.userDto;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * User Account Controller
 * @class UserAccountAPI
 */
export class UserAccountAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * 用户修改密码接口
    * @method
    * @name API#用户修改密码接口
    
    * @param  changePwdReqParam - changePwdReqParam 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    changePwdUsingPOST ( parameters : {
      'changePwdReqParam'  : ChangePwdReqParam,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BaseResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/change-password',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.changePwdReqParam;   
      return axios.request( config );
    }
    
    /**
    * changeUserState
    * @method
    * @name API#changeUserState
    
    * @param  accountUserInfo - accountUserInfo 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    changeUserStateUsingPUT ( parameters : {
      'accountUserInfo'  : AccountUserInfo,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/changeUserState',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.accountUserInfo;   
      return axios.request( config );
    }
    
    /**
    * createUserAccount
    * @method
    * @name API#createUserAccount
    
    * @param  userAccount - userAccount 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createUserAccountUsingPOST ( parameters : {
      'userAccount'  : UserAccount,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.userAccount;   
      return axios.request( config );
    }
    
    /**
    * deleteUserAccount
    * @method
    * @name API#deleteUserAccount
    
    * @param string userId - userId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteUserAccountUsingDELETE ( parameters : {
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/delete',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
    
    /**
    * list
    * @method
    * @name API#list
    
    * @param string key - key 
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param integer status - status 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listUsingGET_3 ( parameters : {
      'key'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'status'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfUserAccountDTO> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['key'] = parameters.key;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['status'] = parameters.status;   
      return axios.request( config );
    }
    
    /**
    * queryUser
    * @method
    * @name API#queryUser
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    queryUserUsingGET ( parameters : {
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfUserAccount> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/queryUser',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
         
      return axios.request( config );
    }
    
    /**
    * updateUserAccount
    * @method
    * @name API#updateUserAccount
    
    * @param  userAccount - userAccount 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateUserAccountUsingPUT ( parameters : {
      'userAccount'  : UserAccount,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.userAccount;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string openId - openId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_8 ( parameters : {
      'openId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfUserAccount> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userAccount/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['openId'] = parameters.openId;   
      return axios.request( config );
    }
  

}

  

// start 
/**
 * User Role Controller
 * @class UserRoleAPI
 */
export class UserRoleAPI {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
    
    /**
    * createRole
    * @method
    * @name API#createRole
    
    * @param  userRole - userRole 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    createRoleUsingPOST_2 ( parameters : {
      'userRole'  : UserRole,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userRole/create',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.userRole;   
      return axios.request( config );
    }
    
    /**
    * deleteRole
    * @method
    * @name API#deleteRole
    
    * @param string userRoleId - userRoleId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    deleteRoleUsingDELETE_2 ( parameters : {
      'userRoleId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userRole/delete',
        method: 'DELETE'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.url = config.url.replace('{userRoleId}',parameters.userRoleId+'');   
      return axios.request( config );
    }
    
    /**
    * giveUserRole
    * @method
    * @name API#giveUserRole
    
    * @param string userId - userId 
    
    * @param  userRoleList - userRoleList 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    giveUserRoleUsingPOST ( parameters : {
      'userId'  ?: string,
      'userRoleList'  : Array<UserRole>,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userRole/giveUserRole',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['userId'] = parameters.userId;
      config.data = parameters.userRoleList;   
      return axios.request( config );
    }
    
    /**
    * list
    * @method
    * @name API#list
    
    * @param string createTime -  
    
    * @param string creator -  
    
    * @param integer pageNum - pageNum 
    
    * @param integer pageSize - pageSize 
    
    * @param string roleId -  
    
    * @param string updateTime -  
    
    * @param string userId -  
    
    * @param string userRoleId -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    listUsingGET_4 ( parameters : {
      'createTime'  ?: string,
      'creator'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'roleId'  ?: string,
      'updateTime'  ?: string,
      'userId'  ?: string,
      'userRoleId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponseOfPageInfoOfUserRole> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userRole/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['createTime'] = parameters.createTime;
      config.params['creator'] = parameters.creator;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['roleId'] = parameters.roleId;
      config.params['updateTime'] = parameters.updateTime;
      config.params['userId'] = parameters.userId;
      config.params['userRoleId'] = parameters.userRoleId;   
      return axios.request( config );
    }
    
    /**
    * updateRole
    * @method
    * @name API#updateRole
    
    * @param  userRole - userRole 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    updateRoleUsingPUT_3 ( parameters : {
      'userRole'  : UserRole,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<BasePayloadResponse> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userRole/update',
        method: 'PUT'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.userRole;   
      return axios.request( config );
    }
    
    /**
    * selectOne
    * @method
    * @name API#selectOne
    
    * @param string roleId - roleId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    selectOneUsingGET_9 ( parameters : {
      'roleId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<UserRole> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/userRole/view',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['roleId'] = parameters.roleId;   
      return axios.request( config );
    }
  

}




/**
 * 管理系统接口描述
 * @class API
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
export class API {

  $defaultDomain:string

  /**
   *  API构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://localhost:8080';
  }
  
  
    _WebMvcEndpointHandlerMappingAPI: WebMvcEndpointHandlerMappingAPI = null;
    getWebMvcEndpointHandlerMappingAPI(): WebMvcEndpointHandlerMappingAPI{
      if(!this._WebMvcEndpointHandlerMappingAPI){
        this._WebMvcEndpointHandlerMappingAPI = new WebMvcEndpointHandlerMappingAPI(this.$defaultDomain)
      }
      return this._WebMvcEndpointHandlerMappingAPI;
    }
  
  
    _OperationHandlerAPI: OperationHandlerAPI = null;
    getOperationHandlerAPI(): OperationHandlerAPI{
      if(!this._OperationHandlerAPI){
        this._OperationHandlerAPI = new OperationHandlerAPI(this.$defaultDomain)
      }
      return this._OperationHandlerAPI;
    }
  
  
    _AppEnvValueAPI: AppEnvValueAPI = null;
    getAppEnvValueAPI(): AppEnvValueAPI{
      if(!this._AppEnvValueAPI){
        this._AppEnvValueAPI = new AppEnvValueAPI(this.$defaultDomain)
      }
      return this._AppEnvValueAPI;
    }
  
  
    _AppVersionAPI: AppVersionAPI = null;
    getAppVersionAPI(): AppVersionAPI{
      if(!this._AppVersionAPI){
        this._AppVersionAPI = new AppVersionAPI(this.$defaultDomain)
      }
      return this._AppVersionAPI;
    }
  
  
    _AppAPI: AppAPI = null;
    getAppAPI(): AppAPI{
      if(!this._AppAPI){
        this._AppAPI = new AppAPI(this.$defaultDomain)
      }
      return this._AppAPI;
    }
  
  
    _DemandLogAPI: DemandLogAPI = null;
    getDemandLogAPI(): DemandLogAPI{
      if(!this._DemandLogAPI){
        this._DemandLogAPI = new DemandLogAPI(this.$defaultDomain)
      }
      return this._DemandLogAPI;
    }
  
  
    _BannerAPI: BannerAPI = null;
    getBannerAPI(): BannerAPI{
      if(!this._BannerAPI){
        this._BannerAPI = new BannerAPI(this.$defaultDomain)
      }
      return this._BannerAPI;
    }
  
  
    _ContentAPI: ContentAPI = null;
    getContentAPI(): ContentAPI{
      if(!this._ContentAPI){
        this._ContentAPI = new ContentAPI(this.$defaultDomain)
      }
      return this._ContentAPI;
    }
  
  
    _DatavolumAPI: DatavolumAPI = null;
    getDatavolumAPI(): DatavolumAPI{
      if(!this._DatavolumAPI){
        this._DatavolumAPI = new DatavolumAPI(this.$defaultDomain)
      }
      return this._DatavolumAPI;
    }
  
  
    _DemandAPI: DemandAPI = null;
    getDemandAPI(): DemandAPI{
      if(!this._DemandAPI){
        this._DemandAPI = new DemandAPI(this.$defaultDomain)
      }
      return this._DemandAPI;
    }
  
  
    _DeployEnvAPI: DeployEnvAPI = null;
    getDeployEnvAPI(): DeployEnvAPI{
      if(!this._DeployEnvAPI){
        this._DeployEnvAPI = new DeployEnvAPI(this.$defaultDomain)
      }
      return this._DeployEnvAPI;
    }
  
  
    _DeployAPI: DeployAPI = null;
    getDeployAPI(): DeployAPI{
      if(!this._DeployAPI){
        this._DeployAPI = new DeployAPI(this.$defaultDomain)
      }
      return this._DeployAPI;
    }
  
  
    _DictionAPI: DictionAPI = null;
    getDictionAPI(): DictionAPI{
      if(!this._DictionAPI){
        this._DictionAPI = new DictionAPI(this.$defaultDomain)
      }
      return this._DictionAPI;
    }
  
  
    _BasicErrorAPI: BasicErrorAPI = null;
    getBasicErrorAPI(): BasicErrorAPI{
      if(!this._BasicErrorAPI){
        this._BasicErrorAPI = new BasicErrorAPI(this.$defaultDomain)
      }
      return this._BasicErrorAPI;
    }
  
  
    _FileUploadAPI: FileUploadAPI = null;
    getFileUploadAPI(): FileUploadAPI{
      if(!this._FileUploadAPI){
        this._FileUploadAPI = new FileUploadAPI(this.$defaultDomain)
      }
      return this._FileUploadAPI;
    }
  
  
    _GuildAPI: GuildAPI = null;
    getGuildAPI(): GuildAPI{
      if(!this._GuildAPI){
        this._GuildAPI = new GuildAPI(this.$defaultDomain)
      }
      return this._GuildAPI;
    }
  
  
    _LabelAPI: LabelAPI = null;
    getLabelAPI(): LabelAPI{
      if(!this._LabelAPI){
        this._LabelAPI = new LabelAPI(this.$defaultDomain)
      }
      return this._LabelAPI;
    }
  
  
    _MarkModelAPI: MarkModelAPI = null;
    getMarkModelAPI(): MarkModelAPI{
      if(!this._MarkModelAPI){
        this._MarkModelAPI = new MarkModelAPI(this.$defaultDomain)
      }
      return this._MarkModelAPI;
    }
  
  
    _MarkTemplateAPI: MarkTemplateAPI = null;
    getMarkTemplateAPI(): MarkTemplateAPI{
      if(!this._MarkTemplateAPI){
        this._MarkTemplateAPI = new MarkTemplateAPI(this.$defaultDomain)
      }
      return this._MarkTemplateAPI;
    }
  
  
    _MenuAPI: MenuAPI = null;
    getMenuAPI(): MenuAPI{
      if(!this._MenuAPI){
        this._MenuAPI = new MenuAPI(this.$defaultDomain)
      }
      return this._MenuAPI;
    }
  
  
    _OpenAPI: OpenAPI = null;
    getOpenAPI(): OpenAPI{
      if(!this._OpenAPI){
        this._OpenAPI = new OpenAPI(this.$defaultDomain)
      }
      return this._OpenAPI;
    }
  
  
    _PipelinejobAPI: PipelinejobAPI = null;
    getPipelinejobAPI(): PipelinejobAPI{
      if(!this._PipelinejobAPI){
        this._PipelinejobAPI = new PipelinejobAPI(this.$defaultDomain)
      }
      return this._PipelinejobAPI;
    }
  
  
    _PipelinetasknodeAPI: PipelinetasknodeAPI = null;
    getPipelinetasknodeAPI(): PipelinetasknodeAPI{
      if(!this._PipelinetasknodeAPI){
        this._PipelinetasknodeAPI = new PipelinetasknodeAPI(this.$defaultDomain)
      }
      return this._PipelinetasknodeAPI;
    }
  
  
    _PipelineAPI: PipelineAPI = null;
    getPipelineAPI(): PipelineAPI{
      if(!this._PipelineAPI){
        this._PipelineAPI = new PipelineAPI(this.$defaultDomain)
      }
      return this._PipelineAPI;
    }
  
  
    _PipelinetaskcategoryAPI: PipelinetaskcategoryAPI = null;
    getPipelinetaskcategoryAPI(): PipelinetaskcategoryAPI{
      if(!this._PipelinetaskcategoryAPI){
        this._PipelinetaskcategoryAPI = new PipelinetaskcategoryAPI(this.$defaultDomain)
      }
      return this._PipelinetaskcategoryAPI;
    }
  
  
    _PiplelinetasknodeAPI: PiplelinetasknodeAPI = null;
    getPiplelinetasknodeAPI(): PiplelinetasknodeAPI{
      if(!this._PiplelinetasknodeAPI){
        this._PiplelinetasknodeAPI = new PiplelinetasknodeAPI(this.$defaultDomain)
      }
      return this._PiplelinetasknodeAPI;
    }
  
  
    _PipelinetasktypeAPI: PipelinetasktypeAPI = null;
    getPipelinetasktypeAPI(): PipelinetasktypeAPI{
      if(!this._PipelinetasktypeAPI){
        this._PipelinetasktypeAPI = new PipelinetasktypeAPI(this.$defaultDomain)
      }
      return this._PipelinetasktypeAPI;
    }
  
  
    _PrototypeAppVersionAPI: PrototypeAppVersionAPI = null;
    getPrototypeAppVersionAPI(): PrototypeAppVersionAPI{
      if(!this._PrototypeAppVersionAPI){
        this._PrototypeAppVersionAPI = new PrototypeAppVersionAPI(this.$defaultDomain)
      }
      return this._PrototypeAppVersionAPI;
    }
  
  
    _PrototypeAppAPI: PrototypeAppAPI = null;
    getPrototypeAppAPI(): PrototypeAppAPI{
      if(!this._PrototypeAppAPI){
        this._PrototypeAppAPI = new PrototypeAppAPI(this.$defaultDomain)
      }
      return this._PrototypeAppAPI;
    }
  
  
    _RoleAPI: RoleAPI = null;
    getRoleAPI(): RoleAPI{
      if(!this._RoleAPI){
        this._RoleAPI = new RoleAPI(this.$defaultDomain)
      }
      return this._RoleAPI;
    }
  
  
    _RoleMenuAPI: RoleMenuAPI = null;
    getRoleMenuAPI(): RoleMenuAPI{
      if(!this._RoleMenuAPI){
        this._RoleMenuAPI = new RoleMenuAPI(this.$defaultDomain)
      }
      return this._RoleMenuAPI;
    }
  
  
    _SubTeamAPI: SubTeamAPI = null;
    getSubTeamAPI(): SubTeamAPI{
      if(!this._SubTeamAPI){
        this._SubTeamAPI = new SubTeamAPI(this.$defaultDomain)
      }
      return this._SubTeamAPI;
    }
  
  
    _TeamManagerTeamAPI: TeamManagerTeamAPI = null;
    getTeamManagerTeamAPI(): TeamManagerTeamAPI{
      if(!this._TeamManagerTeamAPI){
        this._TeamManagerTeamAPI = new TeamManagerTeamAPI(this.$defaultDomain)
      }
      return this._TeamManagerTeamAPI;
    }
  
  
    _ThemeAPI: ThemeAPI = null;
    getThemeAPI(): ThemeAPI{
      if(!this._ThemeAPI){
        this._ThemeAPI = new ThemeAPI(this.$defaultDomain)
      }
      return this._ThemeAPI;
    }
  
  
    _UserAPI: UserAPI = null;
    getUserAPI(): UserAPI{
      if(!this._UserAPI){
        this._UserAPI = new UserAPI(this.$defaultDomain)
      }
      return this._UserAPI;
    }
  
  
    _UserAccountAPI: UserAccountAPI = null;
    getUserAccountAPI(): UserAccountAPI{
      if(!this._UserAccountAPI){
        this._UserAccountAPI = new UserAccountAPI(this.$defaultDomain)
      }
      return this._UserAccountAPI;
    }
  
  
    _UserRoleAPI: UserRoleAPI = null;
    getUserRoleAPI(): UserRoleAPI{
      if(!this._UserRoleAPI){
        this._UserRoleAPI = new UserRoleAPI(this.$defaultDomain)
      }
      return this._UserRoleAPI;
    }
  
  
}