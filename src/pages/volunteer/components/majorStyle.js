import styled from 'styled-components';

export const MajorContent = styled.div`
  width: 280px;
  .name {font-size: 16px; color: #333; width: 100%;  max-height: 41px; overflow: hidden;}
  .desc {margin-top: 16px; width: 100%;  font-size: 14px; color: #999; width: 100%;}
  .lab_box {
    width: 100%; margin-top: 14px;
    .lef {color: #f86b4f; font-size: 14px; float: left;}
    .rig {color: #f86b4f; font-size: 14px; float: right;}
  }
`