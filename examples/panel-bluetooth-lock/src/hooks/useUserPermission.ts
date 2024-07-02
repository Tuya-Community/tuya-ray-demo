import { useMemo } from 'react';
import { useSelector } from '@/redux';

enum UserType {
  Admin = 10, // 管理员
  Normal = 20, // 普通成员
  Unknown = 30, // 没名字的用户
  Owner = 50, // 家庭拥有者
}

const useUserPermission = () => {
  const user: UserInfo = useSelector(state => state.user);
  const isOwner = useMemo(() => +user?.userType === UserType.Owner || false, [user]);
  const isAdmin = useMemo(() => +user?.userType === UserType.Admin || false, [user]);
  return {
    isOwner,
    isAdmin,
    isOwnerOrAdmin: isOwner || isAdmin,
  };
};

export default useUserPermission;
