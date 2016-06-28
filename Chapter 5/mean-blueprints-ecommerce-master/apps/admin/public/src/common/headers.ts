import { Headers } from 'angular2/http';

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const contentHeaders = new Headers(HEADERS);
// contentHeaders.append('Content-Type', 'application/json');
// contentHeaders.append('Accept', 'application/json');
