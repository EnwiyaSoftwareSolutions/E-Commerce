import {create} from 'zustand';

interface User {
    _id: string;
    username: string;
    email: string;
    password?: string;
}
interface UserStoreState {
    users: User[];
    fetchUsers: () => Promise<void>;
    addUser: (user: Omit<User, '_id'>) => Promise<void>;
    updateUser: (id: string, updateData: Partial<User>) => Promise<void>;
    deleteUser: (id: string) => Promise<void>;
}

const useUserStore = create<UserStoreState>((set) => ({
    users: [] as User[],
    fetchUsers: async () => {
        try {
            const response = await fetch('/api/admin/user');
            const data = await response.json();
            set({ users: data });
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    },
    addUser: async (user: Omit<User, '_id'>) => {
        try {
            const response = await fetch('/api/admin/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            const newUser = await response.json();
            set((state) => ({ users: [...state.users, newUser] }));
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    },
    updateUser: async (id: string, updateData: Partial<User>) => {
        try {
            const response = await fetch('/api/admin/user', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, ...updateData }),
            });
            const updatedUser = await response.json();
            set((state) => ({
                users: state.users.map((user) =>
                    user._id === id ? updatedUser : user
                ),
            }));
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    },
    deleteUser: async (id: string) => {
        try {
            await fetch('/api/admin/user', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });
            set((state) => ({
                users: state.users.filter((user) => user._id !== id),
            }));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    },
}));

export default useUserStore;