#!/usr/bin/perl

use strict;
use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);

my $query = new CGI;
my @names = $query->param;

my $email = param("email");
my $name = param("name");
my $redirect = param("redirect");

open (MAIL, "|/usr/lib/sendmail -t") or die "error: $!";

print MAIL "To: martin\@irt.org\n";
print MAIL "From: $email ($name)\n";
print MAIL "Subject: Dynamic Thank You Page\n";

print MAIL "Output of Dynamic Thank You Page:\n";
print MAIL "-" x 75 . "\n\n";

my $name;
my $value;

foreach $name (@names) {
  my @values = $query->param($name);
  foreach $value (@values) {
    print MAIL "$name=$value\n\n";
  }
}

print MAIL "-" x 75 . "\n\n";
close MAIL;

print "Location: $redirect\n\n";

exit;
