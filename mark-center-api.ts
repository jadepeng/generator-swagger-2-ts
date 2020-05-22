/*jshint -W069 */
import axios, { AxiosResponse,AxiosRequestConfig } from 'axios'
// dtos


export type ApiResult = {
  data ? :   object 
  rt ? :  ApiResultHead  
  success ? :  boolean  
    
}

export type ApiResultHead = {
  appId ? :  string  
  debug ? :   Array <string>
  status ? :  number  
    
}

export type ApiResultListUserTask = {
  data ? :   Array <UserTask>
  rt ? :  ApiResultHead  
  success ? :  boolean  
    
}

export type ApiResultTaskFile = {
  data ? :  TaskFile  
  rt ? :  ApiResultHead  
  success ? :  boolean  
    
}

export type ApiResultlong = {
  data ? :  number  
  rt ? :  ApiResultHead  
  success ? :  boolean  
    
}

export type TaskFile = {
  _id ? :  string  
  allocatedQuantity ? :  number  
  batchId ? :  string  
  createTime ? :  number  
  deleted ? :  boolean  
  fileInfo ? :   object 
  fileUrl ? :  string  
  finish ? :  number  
  machineResult ? :   object 
  markModelId ? :  string  
  name ? :  string  
  order ? :  number  
  premarkResult ? :   object 
  priority ? :  number  
  status ? :  number  
  tag ? :  string  
  users ? :   Array <object>
    
}

export type UserTask = {
  _id ? :  string  
  accuracyRate ? :  number  
  badCount ? :  number  
  batchCreateTime ? :  string  
  batchId ? :  string  
  createdBy ? :  string  
  createdDate ? :  string  
  deleted ? :  boolean  
  enable ? :  boolean  
  filesCount ? :  number  
  guildBatchId ? :  string  
  guildId ? :  string  
  guildName ? :  string  
  guildPresidentName ? :  string  
  guildType ? :  number  
  isExemption ? :  boolean  
  isVirtual ? :  boolean  
  lastIndex ? :  number  
  lastModifiedBy ? :  string  
  lastModifiedDate ? :  string  
  markModelId ? :  string  
  markName ? :  string  
  preUserTaskId ? :  string  
  priority ? :  number  
  progress ? :  number  
  startTime ? :  string  
  status ? :  number  
  statusInfo ? :   Array <object>
  step ? :  number  
  submitTime ? :  string  
  taskId ? :  string  
  taskTeamId ? :  string  
  userId ? :  string  
  userName ? :  string  
    
}

export type 分配信息 = {
  count ? :  number  
  id ? :  string  
  isExemption ? :  boolean  
  userId ? :  string  
    
}



  

/**
 * Result Controller
 * @class ResultAPI
 */
export class ResultAPI {

  $defaultDomain:string

  /**
   *  MarkAPI构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://mark-center-v4-dev.iflyresearch.com';
  }
  
    
    /**
    * 导出
    * @method
    * @name ResultAPI#导出
    
    * @param  batchId - 批次id 
    
    * @param  data - 导出条件 
    
    * @param  markModelId - 标注方式id 
    
    * @param  taskId - 任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    export ( parameters : {
      'batchId'  : string,
      'data'  : string,
      'markModelId'  ?: string,
      'taskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/export',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.batchId;
      config.data = parameters.data;
      config.data = parameters.markModelId;
      config.data = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * 文件结果
    * @method
    * @name ResultAPI#文件结果
    
    * @param  taskId - 任务id 
    
    * @param  userTaskFileId - 用户任务文件id 
    
    * @param  userTaskId - 用户任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getResult ( parameters : {
      'taskId'  : string,
      'userTaskFileId'  : string,
      'userTaskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/result',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.data = parameters.taskId;
      config.data = parameters.userTaskFileId;
      config.data = parameters.userTaskId;   
      return axios.request( config );
    }
    
    /**
    * 历史结果
    * @method
    * @name ResultAPI#历史结果
    
    * @param  taskId - 任务id 
    
    * @param  userTaskFileId - 用户任务文件id 
    
    * @param  userTaskId - 用户任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    getResultHistoryList ( parameters : {
      'taskId'  : string,
      'userTaskFileId'  : string,
      'userTaskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/result/historyList',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.data = parameters.taskId;
      config.data = parameters.userTaskFileId;
      config.data = parameters.userTaskId;   
      return axios.request( config );
    }
    
    /**
    * 保存
    * @method
    * @name ResultAPI#保存
    
    * @param  data - 结果信息 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    save ( parameters : {
      'data'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/result/save',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.data;   
      return axios.request( config );
    }
  

}

  

/**
 * File Controller
 * @class FileAPI
 */
export class FileAPI {

  $defaultDomain:string

  /**
   *  MarkAPI构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://mark-center-v4-dev.iflyresearch.com';
  }
  
    
    /**
    * query
    * @method
    * @name FileAPI#query
    
    * @param string batchId -  
    
    * @param integer currPage -  
    
    * @param string endTime -  
    
    * @param string extend -  
    
    * @param string fileId -  
    
    * @param string name -  
    
    * @param integer pageSize -  
    
    * @param string startTime -  
    
    * @param array status -  
    
    * @param string taskId -  
    
    * @param string userId -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    query ( parameters : {
      'batchId'  ?: string,
      'currPage'  ?: number,
      'endTime'  ?: string,
      'extend'  ?: string,
      'fileId'  ?: string,
      'name'  ?: string,
      'pageSize'  ?: number,
      'startTime'  ?: string,
      'status'  ?: Array<undefined>,
      'taskId'  ?: string,
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResultTaskFile> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/file/info',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['batchId'] = parameters.batchId;
      config.params['currPage'] = parameters.currPage;
      config.params['endTime'] = parameters.endTime;
      config.params['extend'] = parameters.extend;
      config.params['fileId'] = parameters.fileId;
      config.params['name'] = parameters.name;
      config.params['pageSize'] = parameters.pageSize;
      config.params['startTime'] = parameters.startTime;
      config.params['status'] = parameters.status;
      config.params['taskId'] = parameters.taskId;
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
    
    /**
    * count
    * @method
    * @name FileAPI#count
    
    * @param string batchId -  
    
    * @param integer currPage -  
    
    * @param string endTime -  
    
    * @param string extend -  
    
    * @param string fileId -  
    
    * @param string name -  
    
    * @param integer pageSize -  
    
    * @param string startTime -  
    
    * @param array status -  
    
    * @param string taskId -  
    
    * @param string userId -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    count ( parameters : {
      'batchId'  ?: string,
      'currPage'  ?: number,
      'endTime'  ?: string,
      'extend'  ?: string,
      'fileId'  ?: string,
      'name'  ?: string,
      'pageSize'  ?: number,
      'startTime'  ?: string,
      'status'  ?: Array<undefined>,
      'taskId'  ?: string,
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResultlong> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/file/info/count',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['batchId'] = parameters.batchId;
      config.params['currPage'] = parameters.currPage;
      config.params['endTime'] = parameters.endTime;
      config.params['extend'] = parameters.extend;
      config.params['fileId'] = parameters.fileId;
      config.params['name'] = parameters.name;
      config.params['pageSize'] = parameters.pageSize;
      config.params['startTime'] = parameters.startTime;
      config.params['status'] = parameters.status;
      config.params['taskId'] = parameters.taskId;
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
  

}

  

/**
 * User Task Controller
 * @class UserTaskAPI
 */
export class UserTaskAPI {

  $defaultDomain:string

  /**
   *  MarkAPI构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://mark-center-v4-dev.iflyresearch.com';
  }
  
    
    /**
    * 我的任务列表
    * @method
    * @name UserTaskAPI#我的任务列表
    
    * @param string name - 用户任务名称 
    
    * @param string orderBy - orderBy 
    
    * @param integer pageNum - 分页页数 
    
    * @param integer pageSize - 分页大小 
    
    * @param  recoveryTime - 截止时间 
    
    * @param ref status - 用户任务状态 
    
    * @param integer statusTab - 标客任务tab框 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    myTaskList ( parameters : {
      'name'  ?: string,
      'orderBy'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'recoveryTime'  ?: number,
      'status'  ?: object,
      'statusTab'  ?: number,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/myTask/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['name'] = parameters.name;
      config.params['orderBy'] = parameters.orderBy;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      
      config.params['status'] = parameters.status;
      config.params['statusTab'] = parameters.statusTab;   
      return axios.request( config );
    }
    
    /**
    * 自动回收
    * @method
    * @name UserTaskAPI#自动回收
    
    * @param boolean autoSubmit -  
    
    * @param string id - 标注任务ID/标注任务文件ID 
    
    * @param boolean keepResult -  
    
    * @param string markModelId - 标注方式ID 
    
    * @param string reason -  
    
    * @param string recoveryType -  
    
    * @param string taskBatchId - 批次ID 
    
    * @param string taskId - 任务ID 
    
    * @param string userId -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    autoRecovery ( parameters : {
      'autoSubmit'  ?: boolean,
      'id'  : string,
      'keepResult'  ?: boolean,
      'markModelId'  : string,
      'reason'  ?: string,
      'recoveryType'  ?: 'GIVE_UP' | 'RECOVERY' | 'AUTO_RECOVERY' | 'REPULSE' | 'TRANSFER',
      'taskBatchId'  : string,
      'taskId'  : string,
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/autoRecovery',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*, application/json';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['autoSubmit'] = parameters.autoSubmit;
      config.params['id'] = parameters.id;
      config.params['keepResult'] = parameters.keepResult;
      config.params['markModelId'] = parameters.markModelId;
      config.params['reason'] = parameters.reason;
      config.params['recoveryType'] = parameters.recoveryType;
      config.params['taskBatchId'] = parameters.taskBatchId;
      config.params['taskId'] = parameters.taskId;
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
    
    /**
    * 放弃
    * @method
    * @name UserTaskAPI#放弃
    
    * @param boolean autoSubmit - 是否自动提交 
    
    * @param string id - 标注任务ID/标注任务文件ID 
    
    * @param boolean keepResult - 是否保留结果 
    
    * @param string markModelId - 标注方式ID 
    
    * @param string reason - 放弃原因 
    
    * @param string recoveryType -  
    
    * @param string taskBatchId - 批次ID 
    
    * @param string taskId - 任务ID 
    
    * @param string userId -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    giveUp ( parameters : {
      'autoSubmit'  ?: boolean,
      'id'  : string,
      'keepResult'  ?: boolean,
      'markModelId'  : string,
      'reason'  ?: string,
      'recoveryType'  ?: 'GIVE_UP' | 'RECOVERY' | 'AUTO_RECOVERY' | 'REPULSE' | 'TRANSFER',
      'taskBatchId'  : string,
      'taskId'  : string,
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/giveUp',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*, application/json';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['autoSubmit'] = parameters.autoSubmit;
      config.params['id'] = parameters.id;
      config.params['keepResult'] = parameters.keepResult;
      config.params['markModelId'] = parameters.markModelId;
      config.params['reason'] = parameters.reason;
      config.params['recoveryType'] = parameters.recoveryType;
      config.params['taskBatchId'] = parameters.taskBatchId;
      config.params['taskId'] = parameters.taskId;
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
    
    /**
    * 标注数据拉取
    * @method
    * @name UserTaskAPI#标注数据拉取
    
    * @param string batchId - 批次ID 
    
    * @param string markModelId - 标注方式ID 
    
    * @param string markTaskFileId - 标注任务文件ID 
    
    * @param string markTaskId - 标注任务ID 
    
    * @param integer step - step 
    
    * @param string taskId - 任务ID 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    pullMarkData ( parameters : {
      'batchId'  : string,
      'markModelId'  : string,
      'markTaskFileId'  : 'list' | 'detail' | '{id:0' | '1' | '2...}',
      'markTaskId'  : string,
      'step'  : number,
      'taskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/markData/pull',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['batchId'] = parameters.batchId;
      config.params['markModelId'] = parameters.markModelId;
      config.params['markTaskFileId'] = parameters.markTaskFileId;
      config.params['markTaskId'] = parameters.markTaskId;
      config.params['step'] = parameters.step;
      config.params['taskId'] = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * 回收
    * @method
    * @name UserTaskAPI#回收
    
    * @param boolean autoSubmit - 是否自动提交 
    
    * @param string id - 标注任务ID/标注任务文件ID 
    
    * @param boolean keepResult - 是否保留结果 
    
    * @param string markModelId - 标注方式ID 
    
    * @param string reason -  
    
    * @param string recoveryType -  
    
    * @param string taskBatchId - 批次ID 
    
    * @param string taskId - 任务ID 
    
    * @param string userId -  
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    recovery ( parameters : {
      'autoSubmit'  ?: boolean,
      'id'  : string,
      'keepResult'  ?: boolean,
      'markModelId'  : string,
      'reason'  ?: string,
      'recoveryType'  ?: 'GIVE_UP' | 'RECOVERY' | 'AUTO_RECOVERY' | 'REPULSE' | 'TRANSFER',
      'taskBatchId'  : string,
      'taskId'  : string,
      'userId'  ?: string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/recovery',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*, application/json';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['autoSubmit'] = parameters.autoSubmit;
      config.params['id'] = parameters.id;
      config.params['keepResult'] = parameters.keepResult;
      config.params['markModelId'] = parameters.markModelId;
      config.params['reason'] = parameters.reason;
      config.params['recoveryType'] = parameters.recoveryType;
      config.params['taskBatchId'] = parameters.taskBatchId;
      config.params['taskId'] = parameters.taskId;
      config.params['userId'] = parameters.userId;   
      return axios.request( config );
    }
    
    /**
    * 打回
    * @method
    * @name UserTaskAPI#打回
    
    * @param string batchId - 批次ID 
    
    * @param string id -     标注任务ID/标注任务文件ID 
    
    * @param string markModelId - 标注方式ID 
    
    * @param string reason - 打回理由 
    
    * @param string taskId - 任务ID 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    repulse ( parameters : {
      'batchId'  : string,
      'id'  : string,
      'markModelId'  : string,
      'reason'  ?: string,
      'taskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/repulse',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['batchId'] = parameters.batchId;
      config.params['id'] = parameters.id;
      config.params['markModelId'] = parameters.markModelId;
      config.params['reason'] = parameters.reason;
      config.params['taskId'] = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * 提交
    * @method
    * @name UserTaskAPI#提交
    
    * @param ref distributeType - 类型0多条领取方式，1逐条领取,userTask中isVirtual为0时distributeType=0，否则=1 
    
    * @param string sourceId - 标注任务id/标注任务文件id 
    
    * @param string taskId - 任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    submit ( parameters : {
      'distributeType'  : object,
      'sourceId'  : string,
      'taskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/submit',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{distributeType}',parameters.distributeType+'');
      config.url = config.url.replace('{sourceId}',parameters.sourceId+'');
      config.url = config.url.replace('{taskId}',parameters.taskId+'');   
      return axios.request( config );
    }
    
    /**
    * 转移
    * @method
    * @name UserTaskAPI#转移
    
    * @param ref distributeType - 类型2多条领取方式，1逐条领取,userTask中isVirtual为0时distributeType=2，否则=1 
    
    * @param string reason - 转移原因 
    
    * @param string sourceId - 标注任务id/标注任务文件id 
    
    * @param string taskBatchId - 批次id 
    
    * @param string taskId - 任务id 
    
    * @param string userId - 目标用户id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    transfer ( parameters : {
      'distributeType'  : object,
      'reason'  ?: string,
      'sourceId'  : string,
      'taskBatchId'  : string,
      'taskId'  : string,
      'userId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/transfer',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['distributeType'] = parameters.distributeType;
      config.params['reason'] = parameters.reason;
      config.params['sourceId'] = parameters.sourceId;
      config.params['taskBatchId'] = parameters.taskBatchId;
      config.params['taskId'] = parameters.taskId;
      config.url = config.url.replace('{userId}',parameters.userId+'');   
      return axios.request( config );
    }
    
    /**
    * virtualSubmit
    * @method
    * @name UserTaskAPI#virtualSubmit
    
    * @param string userTaskId - 标客任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    virtualSubmit ( parameters : {
      'userTaskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/virtual/submit',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['userTaskId'] = parameters.userTaskId;   
      return axios.request( config );
    }
    
    /**
    * 下一条(逐条)
    * @method
    * @name UserTaskAPI#下一条(逐条)
    
    * @param string autoNextFile - 是否自动领取下一条任务 
    
    * @param  data - 保存的结果 
    
    * @param string userTaskId - userTaskId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    saveAndNextFile ( parameters : {
      'autoNextFile'  : string,
      'data'  ?: string,
      'userTaskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/usertask/next',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{autoNextFile}',parameters.autoNextFile+'');
      config.data = parameters.data;
      config.url = config.url.replace('{userTaskId}',parameters.userTaskId+'');   
      return axios.request( config );
    }
  

}

  

/**
 * Task Controller
 * @class TaskAPI
 */
export class TaskAPI {

  $defaultDomain:string

  /**
   *  MarkAPI构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://mark-center-v4-dev.iflyresearch.com';
  }
  
    
    /**
    * 申请任务
    * @method
    * @name TaskAPI#申请任务
    
    * @param  batchId - 批次id 
    
    * @param integer count - 领取数量 
    
    * @param  guildId - 工会id 
    
    * @param string markModelId - 标注方式id 
    
    * @param integer step - 任务步骤 
    
    * @param string taskId - 任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    applyTask ( parameters : {
      'batchId'  ?: string,
      'count'  : number,
      'guildId'  ?: string,
      'markModelId'  : string,
      'step'  ?: number,
      'taskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResultListUserTask> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/apply',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = 'application/json';
      
      config.data = parameters.batchId;
      config.params['count'] = parameters.count;
      config.data = parameters.guildId;
      config.params['markModelId'] = parameters.markModelId;
      config.params['step'] = parameters.step;
      config.params['taskId'] = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * 分配任务
    * @method
    * @name TaskAPI#分配任务
    
    * @param string batchId - 批次id 
    
    * @param  distributionBo - distributionBo 
    
    * @param  guildId - 工会id 
    
    * @param string markModelId - 标注方式id 
    
    * @param integer step - 任务步骤 
    
    * @param string taskId - 任务id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    assignTask ( parameters : {
      'batchId'  : string,
      'distributionBo'  : Array<分配信息>,
      'guildId'  ?: string,
      'markModelId'  : string,
      'step'  ?: number,
      'taskId'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResultListUserTask> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/assign',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*, application/json';
      config.headers['Content-Type'] = 'application/json';
      
      config.params['batchId'] = parameters.batchId;
      config.data = parameters.distributionBo;
      config.data = parameters.guildId;
      config.params['markModelId'] = parameters.markModelId;
      config.params['step'] = parameters.step;
      config.params['taskId'] = parameters.taskId;   
      return axios.request( config );
    }
    
    /**
    * （生成质检任务等，手动流转功能接口）
    * @method
    * @name TaskAPI#（生成质检任务等，手动流转功能接口）
    
    * @param string batchId - 待解锁的批次ID 
    
    * @param string step - stepId 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    unlockStep ( parameters : {
      'batchId'  : string,
      'step'  : string,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResultListUserTask> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/task/batch/step/unlock',
        method: 'POST'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*, application/json';
      config.headers['Content-Type'] = 'application/json';
      
      config.url = config.url.replace('{batchId}',parameters.batchId+'');
      config.url = config.url.replace('{step}',parameters.step+'');   
      return axios.request( config );
    }
  

}

  

/**
 * User Task File Controller
 * @class UserTaskFileAPI
 */
export class UserTaskFileAPI {

  $defaultDomain:string

  /**
   *  MarkAPI构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://mark-center-v4-dev.iflyresearch.com';
  }
  
    
    /**
    * 我的任务文件列表
    * @method
    * @name UserTaskFileAPI#我的任务文件列表
    
    * @param string name - 用户任务文件名称 
    
    * @param integer pageNum - 分页页数 
    
    * @param integer pageSize - 分页大小 
    
    * @param ref status - 用户任务状态 
    
    * @param  taskId - 任务Id 
    
    * @param  userTaskId - 用户任务Id 
    
    * @param $domain API域名,没有指定则使用构造函数指定的
    */
    userTaskFileList ( parameters : {
      'name'  ?: string,
      'pageNum'  ?: number,
      'pageSize'  ?: number,
      'status'  ?: object,
      'taskId'  : String,
      'userTaskId'  : String,
      $queryParameters ?: any,
      $domain ?: string
    }): Promise <AxiosResponse<ApiResult> > { 

      let config: AxiosRequestConfig = {
        baseURL: parameters.$domain || this.$defaultDomain,
        url: '/mark/v4/userTaskFile/list',
        method: 'GET'
      }
    
      config.headers = {}
      config.params = {}
      
      config.headers['Accept'] = '*/*';
      
      config.params['name'] = parameters.name;
      config.params['pageNum'] = parameters.pageNum;
      config.params['pageSize'] = parameters.pageSize;
      config.params['status'] = parameters.status;
      
         
      return axios.request( config );
    }
  

}




/**
 * 爱标客标注业务服务文档
 * @class MarkAPI
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
export class MarkAPI {

  $defaultDomain:string

  /**
   *  MarkAPI构造函数
   * @param domain API域名
   */
  constructor( domain?: string ){
    this.$defaultDomain = domain || 'http://mark-center-v4-dev.iflyresearch.com';
  }
  
  
    _ResultAPI: ResultAPI = null;

    /**
    * 获取 Result Controller API
    * return @class ResultAPI
    */
    getResultAPI(): ResultAPI{
      if(!this._ResultAPI){
        this._ResultAPI = new ResultAPI(this.$defaultDomain)
      }
      return this._ResultAPI;
    }
  
  
    _FileAPI: FileAPI = null;

    /**
    * 获取 File Controller API
    * return @class FileAPI
    */
    getFileAPI(): FileAPI{
      if(!this._FileAPI){
        this._FileAPI = new FileAPI(this.$defaultDomain)
      }
      return this._FileAPI;
    }
  
  
    _UserTaskAPI: UserTaskAPI = null;

    /**
    * 获取 User Task Controller API
    * return @class UserTaskAPI
    */
    getUserTaskAPI(): UserTaskAPI{
      if(!this._UserTaskAPI){
        this._UserTaskAPI = new UserTaskAPI(this.$defaultDomain)
      }
      return this._UserTaskAPI;
    }
  
  
    _TaskAPI: TaskAPI = null;

    /**
    * 获取 Task Controller API
    * return @class TaskAPI
    */
    getTaskAPI(): TaskAPI{
      if(!this._TaskAPI){
        this._TaskAPI = new TaskAPI(this.$defaultDomain)
      }
      return this._TaskAPI;
    }
  
  
    _UserTaskFileAPI: UserTaskFileAPI = null;

    /**
    * 获取 User Task File Controller API
    * return @class UserTaskFileAPI
    */
    getUserTaskFileAPI(): UserTaskFileAPI{
      if(!this._UserTaskFileAPI){
        this._UserTaskFileAPI = new UserTaskFileAPI(this.$defaultDomain)
      }
      return this._UserTaskFileAPI;
    }
  
  
}