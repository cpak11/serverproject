insert into qv_donations( member_id, donation_item, donation_item_description ) values
	( $1, $2, $3 );

select member_id, donation_item, donation_item_description from qv_donations;