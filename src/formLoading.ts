export interface LoadingPromiseType {
  instance?: Promise<any>;
  resolve: (result: any) => void;
  reject?: (error: any) => void;
}

export interface IProps {
  formId: string;
  key: string;
  status: boolean;
}

let loadingPromises: {
  [key in string]: LoadingPromiseType
} = {};

let loadingStatus: {
  [formId in string]: {
    [key: string]: boolean;
  }
} = {};

const setFormLoadingStatus = ({ formId, key, status }: IProps) => {
  loadingStatus[formId] = loadingStatus[formId] || {};

  let lps = loadingPromises[formId];
  if (!lps) {
    let _resolve = (value: any) => { };
    let _reject = () => { };
    const _promise = new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    lps = {
      instance: _promise,
      resolve: _resolve,
      reject: _reject
    };
    loadingPromises[formId] = lps;
  }

  status && (loadingStatus[formId][key] = status);
  !status && (delete loadingStatus[formId][key]);

  if (!status && Object.keys(loadingStatus[formId]).length === 0) {
    lps.resolve && lps.resolve(false);
  }
}

const invokeLoadingPromise = async (formId: string) =>
  loadingPromises[formId]
    ? loadingPromises[formId].instance
    : Promise.resolve();

const formLoadingCheck = async (formId: string) => {
  await invokeLoadingPromise(formId);
  return Promise.resolve('done');
}

export const formLoadingHelper = {
  formLoadingCheck,
  setFormLoadingStatus
}