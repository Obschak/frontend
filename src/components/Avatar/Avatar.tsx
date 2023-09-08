import * as AvatarRadix from '@radix-ui/react-avatar';

import styles from './avatar.module.css';

import avatar from '../../assets/images/avatar.jpg';

import AvatarProps from './AvatarProps';

const Avatar = ({ avatarSize, image }: AvatarProps) => (
  <div>
    <AvatarRadix.Root className={styles.root}>
      <AvatarRadix.Image
        className={styles.image}
        style={{ width: `${avatarSize}px`, height: `${avatarSize}px` }}
        src={image ? image : avatar}
        alt="avatar"
      />
    </AvatarRadix.Root>
  </div>
);

export default Avatar;
