import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');
// InjectionToken 用于创建可在 Provider 中使用的 Token。
