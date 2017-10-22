insert into qv_donations( member_id, donation_amount ) values
	( $1, $2 );

select member_id, donation_amount from qv_donations;