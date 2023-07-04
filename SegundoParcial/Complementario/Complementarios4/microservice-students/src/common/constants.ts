export enum RabbitMQ {
  StudentQueue = 'students',
  PlatoQueue= 'platos'
}
export enum PlatoMsg {
  CREATE = 'CREATE_PLATO',
  FIND_ALL = 'FIND_PLATOS',
  FIND_ONE = 'FIND_PLATO',
  UPDATE = 'UPDATE_PLATO',
  DELETE = 'DELETE_PLATO',
}


export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}
