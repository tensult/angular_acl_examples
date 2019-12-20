import { TestBed } from '@angular/core/testing';

import { RoleAclService } from './role-acl.service';

describe('RoleAclService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleAclService = TestBed.get(RoleAclService);
    expect(service).toBeTruthy();
  });
});
