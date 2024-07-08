import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-data-manager',
  templateUrl: './file-data-manager.component.html',
  styleUrls: ['./file-data-manager.component.css'],
})
export class FileDataManagerComponent implements OnInit {
  currentUser: string = 'Charles Agada';
  data = [
    { 
      activityName: 'Activity 1',
      recordID: 'R001',
      date: '2024-07-06',
      activityUrl: 'http://example.com/activity1',
      cancelRequest: false,
      initiatorId: 'User001',
      approvalStatus: 'Approved',
      approvalComment: 'Approved without changes'
    },
    { 
      activityName: 'Activity 2',
      recordID: 'R002',
      date: '2024-07-07',
      activityUrl: 'http://example.com/activity2',
      cancelRequest: true,
      initiatorId: 'User002',
      approvalStatus: 'Pending',
      approvalComment: 'Pending further review'
    },
    { 
      activityName: 'Activity 3',
      recordID: 'R003',
      date: '2024-07-08',
      activityUrl: 'http://example.com/activity3',
      cancelRequest: false,
      initiatorId: 'User003',
      approvalStatus: 'Rejected',
      approvalComment: 'Rejected due to incomplete information'
    },
    { 
      activityName: 'Activity 4',
      recordID: 'R004',
      date: '2024-07-09',
      activityUrl: 'http://example.com/activity4',
      cancelRequest: true,
      initiatorId: 'User004',
      approvalStatus: 'Approved',
      approvalComment: 'Approved with minor changes'
    },
    { 
      activityName: 'Activity 5',
      recordID: 'R005',
      date: '2024-07-10',
      activityUrl: 'http://example.com/activity5',
      cancelRequest: false,
      initiatorId: 'User005',
      approvalStatus: 'Pending',
      approvalComment: 'Pending final decision'
    },
    { 
      activityName: 'Activity 6',
      recordID: 'R006',
      date: '2024-07-11',
      activityUrl: 'http://example.com/activity6',
      cancelRequest: false,
      initiatorId: 'User006',
      approvalStatus: 'Approved',
      approvalComment: 'Approved as per specifications'
    },
    { 
      activityName: 'Activity 7',
      recordID: 'R007',
      date: '2024-07-12',
      activityUrl: 'http://example.com/activity7',
      cancelRequest: true,
      initiatorId: 'User007',
      approvalStatus: 'Rejected',
      approvalComment: 'Rejected due to non-compliance'
    },
    { 
      activityName: 'Activity 8',
      recordID: 'R008',
      date: '2024-07-13',
      activityUrl: 'http://example.com/activity8',
      cancelRequest: false,
      initiatorId: 'User008',
      approvalStatus: 'Pending',
      approvalComment: 'Pending clarification'
    },
    { 
      activityName: 'Activity 9',
      recordID: 'R009',
      date: '2024-07-14',
      activityUrl: 'http://example.com/activity9',
      cancelRequest: true,
      initiatorId: 'User009',
      approvalStatus: 'Approved',
      approvalComment: 'Approved with modifications'
    },
    { 
      activityName: 'Activity 10',
      recordID: 'R010',
      date: '2024-07-15',
      activityUrl: 'http://example.com/activity10',
      cancelRequest: false,
      initiatorId: 'User010',
      approvalStatus: 'Pending',
      approvalComment: 'Pending additional information'
    },
    { 
      activityName: 'Activity 11',
      recordID: 'R011',
      date: '2024-07-16',
      activityUrl: 'http://example.com/activity11',
      cancelRequest: true,
      initiatorId: 'User011',
      approvalStatus: 'Rejected',
      approvalComment: 'Rejected due to policy violation'
    },
    { 
      activityName: 'Activity 12',
      recordID: 'R012',
      date: '2024-07-17',
      activityUrl: 'http://example.com/activity12',
      cancelRequest: false,
      initiatorId: 'User012',
      approvalStatus: 'Approved',
      approvalComment: 'Approved with conditions'
    },
    { 
      activityName: 'Activity 13',
      recordID: 'R013',
      date: '2024-07-18',
      activityUrl: 'http://example.com/activity13',
      cancelRequest: true,
      initiatorId: 'User013',
      approvalStatus: 'Pending',
      approvalComment: 'Pending technical review'
    },
    { 
      activityName: 'Activity 14',
      recordID: 'R014',
      date: '2024-07-19',
      activityUrl: 'http://example.com/activity14',
      cancelRequest: false,
      initiatorId: 'User014',
      approvalStatus: 'Approved',
      approvalComment: 'Approved after second round of review'
    },
    { 
      activityName: 'Activity 15',
      recordID: 'R015',
      date: '2024-07-20',
      activityUrl: 'http://example.com/activity15',
      cancelRequest: true,
      initiatorId: 'User015',
      approvalStatus: 'Rejected',
      approvalComment: 'Rejected due to budget constraints'
    },
    { 
      activityName: 'Activity 16',
      recordID: 'R016',
      date: '2024-07-21',
      activityUrl: 'http://example.com/activity16',
      cancelRequest: false,
      initiatorId: 'User016',
      approvalStatus: 'Pending',
      approvalComment: 'Pending stakeholder feedback'
    },
    { 
      activityName: 'Activity 17',
      recordID: 'R017',
      date: '2024-07-22',
      activityUrl: 'http://example.com/activity17',
      cancelRequest: true,
      initiatorId: 'User017',
      approvalStatus: 'Approved',
      approvalComment: 'Approved for implementation'
    },
    { 
      activityName: 'Activity 18',
      recordID: 'R018',
      date: '2024-07-23',
      activityUrl: 'http://example.com/activity18',
      cancelRequest: false,
      initiatorId: 'User018',
      approvalStatus: 'Pending',
      approvalComment: 'Pending legal review'
    },
    { 
      activityName: 'Activity 19',
      recordID: 'R019',
      date: '2024-07-24',
      activityUrl: 'http://example.com/activity19',
      cancelRequest: true,
      initiatorId: 'User019',
      approvalStatus: 'Rejected',
      approvalComment: 'Rejected due to timeline issues'
    },
    { 
      activityName: 'Activity 20',
      recordID: 'R020',
      date: '2024-07-25',
      activityUrl: 'http://example.com/activity20',
      cancelRequest: false,
      initiatorId: 'User020',
      approvalStatus: 'Approved',
      approvalComment: 'Approved with no changes'
    },
  ];
  



columns = [
  { key: 'activityName', label: 'Activity Name' },
  { key: 'recordID', label: 'Record Identification' },
  { key: 'date', label: 'Date' },
  { key: 'activityUrl', label: 'Activity Url' },
  { key: 'cancelRequest', label: 'Cancel Request' },
  { key: 'initiatorId', label: 'Initiator ID' },
  { key: 'approvalStatus', label: 'Approval Status' },
  { key: 'approvalComment', label: 'Approval Comment' },
];


  constructor() {}

  ngOnInit(): void {}
}
