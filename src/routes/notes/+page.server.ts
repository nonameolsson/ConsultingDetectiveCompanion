import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: notes, error } = await supabase.from('notes').select('*');
	console.log('notes', notes);
	console.log('error', error);

	return {
		notes: notes ?? []
	};
}
