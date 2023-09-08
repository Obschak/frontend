import * as AvatarRadix from '@radix-ui/react-avatar';
import clsx from 'clsx';

import styles from './styles.module.scss';

import avatar from '../../assets/images/avatar.jpg';

interface Props {
  size: 'small' | 'large' | 'medium';
  image?: string;
}

const Avatar = ({ size, image }: Props) => {
  const avatarSize = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return (
    <div>
      <AvatarRadix.Root className={styles.root}>
        <AvatarRadix.Image
          className={clsx(styles.image, avatarSize[size])}
          src={image ? image : avatar}
          alt="avatar"
        />
      </AvatarRadix.Root>
    </div>
  );
};

export default Avatar;
