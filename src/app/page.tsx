import { redirect } from 'next/navigation';

// Fallback for when middleware doesn't redirect / → /es
export default function RootPage() {
  redirect('/es');
}
