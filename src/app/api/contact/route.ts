import { NextResponse } from "next/server";

const TARGET_EMAIL = "alfaridzim7@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Semua kolom (Nama, Email, Pesan) wajib diisi!" },
        { status: 400 }
      );
    }

    // Mengirim email ke alfaridzim7@gmail.com melalui FormSubmit AJAX endpoint
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Pesan Konsultasi Baru dari Website (${name})`,
        Nama: name,
        Email: email,
        Pesan: message,
        _template: "table",
      }),
    });

    if (response.ok) {
      console.log(`📩 Pesan dari ${name} (${email}) berhasil dikirim ke ${TARGET_EMAIL}`);
      return NextResponse.json({
        success: true,
        message: `Terima kasih ${name}, pesan Anda telah berhasil dikirim ke ${TARGET_EMAIL}!`,
      });
    } else {
      console.error("Gagal mengirim email via FormSubmit:", await response.text());
      return NextResponse.json(
        { success: false, error: "Gagal mengirim pesan. Silakan coba lagi." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}