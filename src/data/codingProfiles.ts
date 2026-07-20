export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  stats: { label: string; value: string }[];
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'JeyasuriyaJ',
    profileUrl: 'https://leetcode.com/u/JeyasuriyaJ/',
    stats: [
      { label: 'Problems Solved', value: '260+' },
      { label: 'Contests Attended', value: '39' },
      { label: 'Global Rank', value: '772,218' }
    ]
  },
  {
    platform: 'HackerRank',
    username: 'JeyasuriyaJ',
    profileUrl: 'https://www.hackerrank.com/profile/JeyasuriyaJ',
    stats: [
      { label: 'Python Rating', value: '3-Star' },
      { label: 'Global Rank', value: '453,000' }
    ]
  },
  {
    platform: 'CodeChef',
    username: 'jeyasuriya_j',
    profileUrl: 'https://www.codechef.com/users/jeyasuriya_j',
    stats: [
      { label: 'Problems Solved', value: '70+' }
    ]
  },
  {
    platform: 'SkillRack',
    username: 'Jeyasuriya J',
    profileUrl: 'https://www.skillrack.com/faces/resume.xhtml?id=515252&key=9c368c55bb33f24df5d0f6e3501608852374600c',
    stats: [
      { label: 'Problems Solved', value: '1,000+' },
      { label: 'Certificates', value: '5' },
      { label: 'Bronze Badges', value: '256+' }
    ]
  }
];
