import { createClient } from '@supabase/supabase-js';
import type { Database } from '../database.types';

export const supabase = createClient<Database>(
	'https://jbaspyltyvzxzyxrahyw.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiYXNweWx0eXZ6eHp5eHJhaHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MTk3MzAsImV4cCI6MjAxNzE5NTczMH0.HuoOW4Dsvd4Zd9bBsL8RhdzQp6sUUUvXf2aBbFAhwPk'
);
